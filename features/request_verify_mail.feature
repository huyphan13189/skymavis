Feature: Request Verify Mail regression
    Verify business for Request Verify Mail api

    @Regresion @Sanity @RVM01
    Scenario: Request verify mail success
        When I send request verify to email "dinhhuy111@gmail.com"
        Then I see status code 200
        Then I see response body has
            | field   | compare | value                                 | type   |
            | email   | equal   |                                       | string |
            | message | equal   | Captcha to verify your email was sent | string |

    @Regresion @RVM02
    Scenario: Request verify mail that already verified
        When I send request verify to email "huyphantest131+01@gmail.com"
        Then I see status code 400
        Then I see response body has
            | field         | compare | value                                 | type   |
            | _error        | equal   | 400011                                | int    |
            | _errorMessage | equal   | Your email has been already verified. | string |

    @Regresion @RVM03
    Scenario: Request verify mail that already registered
        When I send request verify to email "dinhhuy131@gmail.com"
        Then I see status code 409
        Then I see response body has
            | field         | compare | value                                | type   |
            | _error        | equal   | 409002                               | int    |
            | _errorMessage | equal   | The email has been registered before | string |

    @Regresion @RVM04
    Scenario: Request verify mail with invalid email
        When I send request verify to email "huyphantest131@gmail"
        Then I see status code 400
        Then I see response body has
            | field         | compare | value                 | type   |
            | _error        | equal   | 400002                | int    |
            | _errorMessage | equal   | Input form is invalid | string |
        Then I see response contains jsons
            | json                                                              |
            | {"_errorDetails":{"email":"email must be a valid email address"}} |