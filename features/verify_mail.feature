Feature: Verify Email regression
    Verify business for Verify Email api

    # @Regression @Sanity @VM01
    # Scenario: Verify Mail success
    #     When I send request verify to suffix email
    #     And I get verify code
    #     And I send verify suffix email
    #     Then I see status code 200
    #     Then I see response body has
    #         | field   | compare | value                                     | type   |
    #         | email   | equal   |                                           | string |
    #         | message | equal   | Your email has been verified successfully | string |

    @Regression @Sanity @VM01
    Scenario: Verify Mail success
        When I verify email "huyphantest131+01@gmail.com" and code "607309"
        Then I see status code 200
        Then I see response body has
            | field   | compare | value                                     | type   |
            | email   | equal   |                                           | string |
            | message | equal   | Your email has been verified successfully | string |

    @Regression @VM02
    Scenario: Verify Mail with wrong code
        When I verify email "huyphantest131+01@gmail.com" and code "607300"
        Then I see status code 403
        Then I see response body has
            | field         | compare | value                             | type   |
            | _error        | equal   | 403008                            | int    |
            | _errorMessage | equal   | Verify email token or email wrong | string |

    @Regression @VM03
    Scenario: Verify Mail with wrong email
        When I verify email "wrongemail@gmail.com" and code "607309"
        Then I see status code 403
        Then I see response body has
            | field         | compare | value                             | type   |
            | _error        | equal   | 403008                            | int    |
            | _errorMessage | equal   | Verify email token or email wrong | string |