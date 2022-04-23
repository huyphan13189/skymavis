Feature: Register regression
  Verify business for Register api

  @Regresion @Sanity @R01
  Scenario: Register Mail success
    When I send request verify to suffix email
    And I get verify code
    And I send verify suffix email
    And I register suffix email
    Then I see status code 200

  @Regresion @R02
  Scenario: Register Mail with that is not verified
    When I register fof email "huyphantest131+03@gmail.com" and password "password123"
    Then I see status code 403
    Then I see response body has
      | field         | compare | value                      | type   |
      | _error        | equal   | 403007                     | int    |
      | _errorMessage | equal   | Your email is not verified | string |

  @Regresion @R03
  Scenario: Register Mail with that alread registered
    When I register fof email "dinhhuy131@gmail.com" and password "password123"
    Then I see status code 403
    Then I see response body has
      | field         | compare | value                                | type   |
      | _error        | equal   | 403007                               | int    |
      | _errorMessage | equal   | The email has been registered before | string |

  @Regresion @R04
  Scenario: Register Mail with password is empty
    When I register fof email "huyphantest131@gmail.com" and password ""
    Then I see status code 400
    Then I see response body has
      | field         | compare | value                 | type   |
      | _error        | equal   | 400002                | int    |
      | _errorMessage | equal   | Input form is invalid | string |
    Then I see response contains jsons
      | json                                                          |
      | {"_errorDetails":{"password":"password is a required field"}} |

  @Regresion @R05
  Scenario: Register Mail with password is only number
    When I register fof email "huyphantest131@gmail.com" and password "12345678"
    Then I see status code 400
    Then I see response body has
      | field         | compare | value                 | type   |
      | _error        | equal   | 400002                | int    |
      | _errorMessage | equal   | Input form is invalid | string |
    Then I see response contains jsons
      | json                                                                                                        |
      | {"_errorDetails":{"password":"passwords must be at least 8 characters including a number and an alphabet"}} |

  @Regresion @R06
  Scenario: Register Mail with password is only alphabet
    When I register fof email "huyphantest131@gmail.com" and password "asdqwassds"
    Then I see status code 400
    Then I see response body has
      | field         | compare | value                 | type   |
      | _error        | equal   | 400002                | int    |
      | _errorMessage | equal   | Input form is invalid | string |
    Then I see response contains jsons
      | json                                                                                                        |
      | {"_errorDetails":{"password":"passwords must be at least 8 characters including a number and an alphabet"}} |


  @Regresion @R07
  Scenario: Register Mail with password is less than 8 characters
    When I register fof email "huyphantest131@gmail.com" and password "abcd123"
    Then I see status code 400
    Then I see response body has
      | field         | compare | value                 | type   |
      | _error        | equal   | 400002                | int    |
      | _errorMessage | equal   | Input form is invalid | string |
    Then I see response contains jsons
      | json                                                                                                        |
      | {"_errorDetails":{"password":"passwords must be at least 8 characters including a number and an alphabet"}} |

