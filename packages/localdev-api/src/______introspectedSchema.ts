export const introspectedSchema = {
    "data" : {
      "__schema" : {
        "queryType" : {
          "name" : "Query"
        },
        "mutationType" : {
          "name" : "Mutation"
        },
        "subscriptionType" : null,
        "types" : [ {
          "kind" : "OBJECT",
          "name" : "Query",
          "description" : null,
          "fields" : [ {
            "name" : "get",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AllItemsUnionResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "query",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryInputAllItemsFields",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AllItemsUnionResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryUsers",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryUsersInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "UsersResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryPeople",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryPeopleInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "PeopleResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryCompanies",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryCompaniesInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CompaniesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryInvoices",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryInvoicesInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "InvoicesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryOrders",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryOrdersInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "OrdersResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryAirplaneManifacturers",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryAirplaneManifacturersInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneManifacturersResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryAirplaneModels",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryAirplaneModelsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneModelsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AgentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryTourists",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryTouristsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryAirplanes",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryAirplanesInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplanesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryPayments",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryPaymentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "PaymentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryFlights",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryFlightsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "FlightsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryTouristSeasons",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryTouristSeasonsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristSeasonsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryLocations",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryLocationsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "LocationsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryqueryBes",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryqueryBesInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "queryBesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryGetGraphqlSchemas",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryGetGraphqlSchemasInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "GetGraphqlSchemasResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryKurs",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryKursInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "KursResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryGenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryGenerateAirtoursTestDataInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "GenerateAirtoursTestDataResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryChangeActiveAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryChangeActiveAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "ChangeActiveAgentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "querySetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QuerySetUserAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "SetUserAgentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getUsers",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "UsersResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getPeople",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "PeopleResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getCompanies",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CompaniesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getInvoices",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "InvoicesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getOrders",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "OrdersResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getAirplaneManifacturers",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneManifacturersResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getAirplaneModels",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneModelsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AgentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getTourists",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getAirplanes",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplanesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getPayments",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "PaymentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getFlights",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "FlightsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getTouristSeasons",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristSeasonsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getLocations",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "LocationsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getqueryBes",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "queryBesResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getGetGraphqlSchemas",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "GetGraphqlSchemasResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getKurs",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "KursResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getGenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "GenerateAirtoursTestDataResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getChangeActiveAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "ChangeActiveAgentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "getSetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetQueryInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "SetUserAgentsResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "queryBe",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryqueryBesInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AllItemsUnionResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "GetGraphqlSchema",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "QueryGetGraphqlSchemasInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AllItemsUnionResultConnection",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AllItemsUnionResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "UNION",
                    "name" : "AllItemsUnion",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "UNION",
          "name" : "AllItemsUnion",
          "description" : null,
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : [ {
            "kind" : "OBJECT",
            "name" : "ItemIdentifier",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "User",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Person",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Company",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Invoice",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Order",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneManifacturer",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneModel",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Agent",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Tourist",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Airplane",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Payment",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Flight",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "TouristSeason",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Location",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "queryBe",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GetGraphqlSchema",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Kur",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GenerateAirtoursTestData",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "ChangeActiveAgent",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "SetUserAgents",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "UserHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "PersonHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "CompanyHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "InvoiceHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "OrderHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneManifacturerHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneModelHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AgentHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "TouristHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "PaymentHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "FlightHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "TouristSeasonHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "LocationHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "queryBeHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GetGraphqlSchemaHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "KurHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GenerateAirtoursTestDataHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "ChangeActiveAgentHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "SetUserAgentsHistory",
            "ofType" : null
          } ],
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "ItemIdentifier",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "SCALAR",
          "name" : "String",
          "description" : "Built-in String",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "User",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Public_data_ref",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "email",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "sub",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "preferredIamRole",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "iamRoles",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "cognitoGroups",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "userPoolId",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "active_agent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Active_agent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Agent",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Agent",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "SCALAR",
          "name" : "Int",
          "description" : "Built-in Int",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "Person",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "fname",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "lname",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "SCALAR",
          "name" : "AWSDateTime",
          "description" : "The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 Date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) string. In other words, this scalar type accepts date strings of the form `YYYY-MM-DD`.  The scalar can also accept \"negative years\" of the form `-YYYY` which correspond to years before `0000`. For example, \"**-2017-05-01**\" and \"**-9999-01-01**\" are both valid dates.  This scalar type can also accept an optional [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators). For example, \"**1970-01-01**\", \"**1970-01-01Z**\", \"**1970-01-01-07:00**\" and \"**1970-01-01+05:30**\" are all valid dates. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard.",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "INTERFACE",
          "name" : "Item",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : [ {
            "kind" : "OBJECT",
            "name" : "User",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Person",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Agent",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Company",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Invoice",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Order",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneManifacturer",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Location",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneModel",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Tourist",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "TouristSeason",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Airplane",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Flight",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Payment",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "queryBe",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GetGraphqlSchema",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "Kur",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GenerateAirtoursTestData",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "ChangeActiveAgent",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "SetUserAgents",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "UserHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "PersonHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "CompanyHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "InvoiceHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "OrderHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneManifacturerHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneModelHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AgentHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "TouristHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "AirplaneHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "PaymentHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "FlightHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "TouristSeasonHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "LocationHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "queryBeHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GetGraphqlSchemaHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "KurHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "GenerateAirtoursTestDataHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "ChangeActiveAgentHistory",
            "ofType" : null
          }, {
            "kind" : "OBJECT",
            "name" : "SetUserAgentsHistory",
            "ofType" : null
          } ],
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Agent",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Public_data_ref",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Company",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location3",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location4",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location5",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "child_agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "parent_agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "agt_data_visibility_conf",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "ENUM",
              "name" : "AgentAgt_data_visibility_confEnum",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Company",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "ENUM",
          "name" : "AgentAgt_data_visibility_confEnum",
          "description" : null,
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : [ {
            "name" : "ALL",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "NONE",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ONLY_CHILDREN",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ONLY_PRENTS",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "SELECT",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          } ],
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Invoice",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_due_date",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_issued_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_number",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "orders",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Orders",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Order",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "total_net",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "total_gross",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "total_vat",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "vat_percent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Order",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Public_data_ref",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "status",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "OBJECT",
                "name" : "OrderItemDto",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "OrderItemDto",
          "description" : null,
          "fields" : [ {
            "name" : "description",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "quantity",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "price_no_vat",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "SCALAR",
          "name" : "Float",
          "description" : "Built-in Float",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneManifacturer",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Location",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "phone1",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "phone2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "address1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "address2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "ENUM",
              "name" : "LocationTypeEnum",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "ENUM",
          "name" : "LocationTypeEnum",
          "description" : null,
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : [ {
            "name" : "city",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "country",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "continent",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "region",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "airport",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          } ],
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneModel",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "capacity",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "manifacturers",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Manifacturers",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneManifacturer",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "baseAirplaneModel",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "BaseAirplaneModel",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneModel",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Tourist",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Public_data_ref",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "fname",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "lname",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "id_card",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "iban",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "tourist_season",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Tourist_season",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristSeason",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ticket_type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "airplane",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Airplane",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Airplane",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "flight",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Flight",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Flight",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "from_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "From_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "to_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "To_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "from_country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "From_country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "to_country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "To_country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "TouristSeason",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "price_flight_per_hour",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "start_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "end_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "discounts",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristSeasonDiscountDto",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "TouristSeasonDiscountDto",
          "description" : null,
          "fields" : [ {
            "name" : "vip",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "class_1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "class_2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Airplane",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "model",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Model",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneModel",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "manifacturer",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Manifacturer",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneManifacturer",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Flight",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "from_airport",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "From_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "to_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "To_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Location",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "start_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "end_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "duration_hours",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "tickets_price",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "FlightTickets_priceDto",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "airplane",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Airplane",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Airplane",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "FlightTickets_priceDto",
          "description" : null,
          "fields" : [ {
            "name" : "class_vip",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "class_1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "class_2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Payment",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_number",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Invoice",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Invoice",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "sender_company",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Sender_company",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Company",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "sender_person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Sender_person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "recipient_person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Recipient_person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Person",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "recipient_company",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Recipient_company",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "Company",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "queryBe",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "GetGraphqlSchema",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Kur",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "model",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Model",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneModel",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "manifacturer",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "Manifacturer",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "AirplaneManifacturer",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "GenerateAirtoursTestData",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "forUser",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "forAgent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "ChangeActiveAgent",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "new_active_agent",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "SetUserAgents",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "UserHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "email",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "sub",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "preferredIamRole",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "iamRoles",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "cognitoGroups",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "userPoolId",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "active_agent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "PersonHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "fname",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "lname",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "CompanyHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "InvoiceHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_due_date",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_issued_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_number",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "orders",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "total_net",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "total_gross",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "total_vat",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "vat_percent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "OrderHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "status",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "OBJECT",
                "name" : "OrderItemDto",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneManifacturerHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneModelHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "capacity",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "manifacturers",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "baseAirplaneModel",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AgentHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location3",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location4",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "location5",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "child_agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "parent_agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "agt_data_visibility_conf",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "ENUM",
              "name" : "AgentAgt_data_visibility_confEnum",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "TouristHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "fname",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "lname",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "id_card",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "iban",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "tourist_season",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ticket_type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "airplane",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "flight",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "from_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "to_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "from_country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "to_country",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "model",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "manifacturer",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "PaymentHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice_number",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "invoice",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "sender_company",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "sender_person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "recipient_person",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "recipient_company",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "FlightHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "from_airport",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "to_airport",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "start_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "end_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "duration_hours",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "tickets_price",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "FlightTickets_priceDto",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "airplane",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "TouristSeasonHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "price_flight_per_hour",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "start_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "end_date",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "discounts",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "TouristSeasonDiscountDto",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "LocationHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "phone1",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "phone2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "address1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "address2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "ENUM",
              "name" : "LocationTypeEnum",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "queryBeHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "GetGraphqlSchemaHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "KurHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "code",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "model",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "manifacturer",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "GenerateAirtoursTestDataHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "forUser",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "forAgent",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "ChangeActiveAgentHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "new_active_agent",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "SetUserAgentsHistory",
          "description" : null,
          "fields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "RANGE",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "rev",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "TITEM",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "checksum",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "ringToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "item_state",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user",
            "description" : " specific props",
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "agents",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "date_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_created",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "user_updated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ {
            "kind" : "INTERFACE",
            "name" : "Item",
            "ofType" : null
          } ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "SCALAR",
          "name" : "AWSJSON",
          "description" : "The `AWSJSON` scalar type provided by AWS AppSync, represents a JSON string that complies with [RFC 8259](https://tools.ietf.org/html/rfc8259).  Maps like \"**{\\\\\"upvotes\\\\\": 10}**\", lists like \"**[1,2,3]**\", and scalar values like \"**\\\\\"AWSJSON example string\\\\\"**\", \"**1**\", and \"**true**\" are accepted as valid JSON and will automatically be parsed and loaded in the resolver mapping templates as Maps, Lists, or Scalar values rather than as the literal input strings.  Invalid JSON strings like \"**{a: 1}**\", \"**{'a': 1}**\" and \"**Unquoted string**\" will throw GraphQL validation errors.",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "GetQueryInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "pks",
            "description" : null,
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "INPUT_OBJECT",
                    "name" : "ItemIdentifierInput",
                    "ofType" : null
                  }
                }
              }
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "correlation_id",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "ItemIdentifierInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryInputAllItemsFields",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "email",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sub",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "preferredIamRole",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "userPoolId",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "active_agent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "fname",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lname",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_due_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_issued_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_number",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_net",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_gross",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_vat",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "vat_percent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "status",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "capacity",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "baseAirplaneModel",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location3",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location4",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location5",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "agt_data_visibility_conf",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "AgentAgt_data_visibility_confEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "id_card",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "iban",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "tourist_season",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ticket_type",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "airplane",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "flight",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_airport",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_airport",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "model",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturer",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_company",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_company",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "start_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "end_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "duration_hours",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "price_flight_per_hour",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "type",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "LocationTypeEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forUser",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forAgent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "new_active_agent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryInputAllItemsFields",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryInputAllItemsFields",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "StringQueryInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "ne",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "eq",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "le",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lt",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ge",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "gt",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "contains",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "not_contains",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "between",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "begins_with",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "attribute_exists",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "attribute_not_exists",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "SCALAR",
          "name" : "Boolean",
          "description" : "Built-in Boolean",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "FloatQueryInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "ne",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "eq",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "le",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lt",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ge",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "gt",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "between",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "Float",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "attribute_exists",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "attribute_not_exists",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "UsersResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "User",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryUsersInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "email",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sub",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "preferredIamRole",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "userPoolId",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "active_agent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryUsersInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryUsersInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "PeopleResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Person",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryPeopleInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "fname",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lname",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryPeopleInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryPeopleInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "CompaniesResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Company",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryCompaniesInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryCompaniesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryCompaniesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "InvoicesResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Invoice",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryInvoicesInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_due_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_issued_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_number",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_net",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_gross",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_vat",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "vat_percent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryInvoicesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryInvoicesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "OrdersResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Order",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryOrdersInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "status",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryOrdersInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryOrdersInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneManifacturersResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "AirplaneManifacturer",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryAirplaneManifacturersInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAirplaneManifacturersInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAirplaneManifacturersInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplaneModelsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "AirplaneModel",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryAirplaneModelsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "capacity",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "baseAirplaneModel",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAirplaneModelsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAirplaneModelsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AgentsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Agent",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryAgentsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location3",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location4",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location5",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "agt_data_visibility_conf",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "AgentAgt_data_visibility_confEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAgentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAgentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "TouristsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Tourist",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryTouristsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "fname",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lname",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "id_card",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "iban",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "tourist_season",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ticket_type",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "airplane",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "flight",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_airport",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_airport",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_country",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryTouristsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryTouristsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "AirplanesResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Airplane",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryAirplanesInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "model",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturer",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAirplanesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryAirplanesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "PaymentsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Payment",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryPaymentsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_number",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_company",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_person",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_company",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryPaymentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryPaymentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "FlightsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Flight",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryFlightsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_airport",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_airport",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "start_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "end_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "duration_hours",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "airplane",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryFlightsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryFlightsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "TouristSeasonsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "TouristSeason",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryTouristSeasonsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "price_flight_per_hour",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "start_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "end_date",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryTouristSeasonsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryTouristSeasonsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "LocationsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Location",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryLocationsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "type",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "LocationTypeEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryLocationsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryLocationsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "queryBesResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "queryBe",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryqueryBesInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryqueryBesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryqueryBesInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "GetGraphqlSchemasResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "GetGraphqlSchema",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryGetGraphqlSchemasInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryGetGraphqlSchemasInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryGetGraphqlSchemasInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "KursResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "Kur",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryKursInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FloatQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "model",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturer",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryKursInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryKursInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "GenerateAirtoursTestDataResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "GenerateAirtoursTestData",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryGenerateAirtoursTestDataInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forUser",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forAgent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryGenerateAirtoursTestDataInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryGenerateAirtoursTestDataInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "ChangeActiveAgentsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "ChangeActiveAgent",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QueryChangeActiveAgentsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "new_active_agent",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryChangeActiveAgentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QueryChangeActiveAgentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "SetUserAgentsResultConnection",
          "description" : null,
          "fields" : [ {
            "name" : "items",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "SetUserAgents",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "pageToken",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "count",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "selectionSetList",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errors",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "excludedFromFilter",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "correlation_id",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ {
            "name" : "aws_iam",
            "args" : [ ]
          }, {
            "name" : "aws_cognito_user_pools",
            "args" : [ ]
          } ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "QuerySetUserAgentsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "StringQueryInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "_and",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QuerySetUserAgentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "_or",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "QuerySetUserAgentsInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "Mutation",
          "description" : null,
          "fields" : [ {
            "name" : "start",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "StartInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "create",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "CreateInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "update",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "UpdateInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patch",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "UpdateInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "del",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "DeleteInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "Kur",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "KurInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "GenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GenerateAirtoursTestDataInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "ChangeActiveAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "ChangeActiveAgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "SetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "SetUserAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createUser",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "UserInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createPerson",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PersonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createCompany",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "CompanyInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createInvoice",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "InvoiceInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createOrder",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "OrderInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createAirplaneManifacturer",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneManifacturerInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createAirplaneModel",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneModelInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createTourist",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createAirplane",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createPayment",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PaymentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createFlight",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "FlightInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createTouristSeason",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristSeasonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createLocation",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "LocationInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createqueryBe",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "queryBeInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createGetGraphqlSchema",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetGraphqlSchemaInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createKur",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "KurInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createGenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GenerateAirtoursTestDataInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createChangeActiveAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "ChangeActiveAgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "createSetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "SetUserAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateUser",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "UserInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updatePerson",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PersonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateCompany",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "CompanyInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateInvoice",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "InvoiceInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateOrder",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "OrderInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateAirplaneManifacturer",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneManifacturerInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateAirplaneModel",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneModelInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateTourist",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateAirplane",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updatePayment",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PaymentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateFlight",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "FlightInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateTouristSeason",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristSeasonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateLocation",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "LocationInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updatequeryBe",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "queryBeInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateGetGraphqlSchema",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetGraphqlSchemaInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateKur",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "KurInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateGenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GenerateAirtoursTestDataInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateChangeActiveAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "ChangeActiveAgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "updateSetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "SetUserAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchUser",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "UserInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchPerson",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PersonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchCompany",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "CompanyInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchInvoice",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "InvoiceInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchOrder",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "OrderInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchAirplaneManifacturer",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneManifacturerInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchAirplaneModel",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneModelInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchTourist",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchAirplane",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchPayment",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PaymentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchFlight",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "FlightInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchTouristSeason",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristSeasonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchLocation",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "LocationInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchqueryBe",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "queryBeInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchGetGraphqlSchema",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetGraphqlSchemaInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchKur",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "KurInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchGenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GenerateAirtoursTestDataInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchChangeActiveAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "ChangeActiveAgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "patchSetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "SetUserAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteUser",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "UserInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deletePerson",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PersonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteCompany",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "CompanyInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteInvoice",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "InvoiceInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteOrder",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "OrderInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteAirplaneManifacturer",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneManifacturerInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteAirplaneModel",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneModelInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteTourist",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteAirplane",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "AirplaneInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deletePayment",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "PaymentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteFlight",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "FlightInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteTouristSeason",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "TouristSeasonInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteLocation",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "LocationInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deletequeryBe",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "queryBeInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteGetGraphqlSchema",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GetGraphqlSchemaInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteKur",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "KurInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteGenerateAirtoursTestData",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "GenerateAirtoursTestDataInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteChangeActiveAgent",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "ChangeActiveAgentInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          }, {
            "name" : "deleteSetUserAgents",
            "description" : null,
            "args" : [ {
              "name" : "input",
              "description" : null,
              "type" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "INPUT_OBJECT",
                  "name" : "SetUserAgentsInput",
                  "ofType" : null
                }
              },
              "defaultValue" : null
            } ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "CommandResult",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ {
              "name" : "aws_iam",
              "args" : [ ]
            }, {
              "name" : "aws_cognito_user_pools",
              "args" : [ ]
            } ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "CommandResult",
          "description" : null,
          "fields" : [ {
            "name" : "status",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errorMessage",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          }, {
            "name" : "errorStack",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : [ ]
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "StartInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "input",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "AllItemsKeysInput",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "AllItemsKeysInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "limit",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "pageToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSJSON",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "keysOnly",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "searchBackward",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "email",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sub",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "preferredIamRole",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "iamRoles",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "cognitoGroups",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "userPoolId",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "active_agent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "fname",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lname",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_due_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_issued_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_number",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "orders",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "total_net",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_gross",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_vat",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "vat_percent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "status",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "items",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "OrderItemDtoInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "capacity",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturers",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "baseAirplaneModel",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location3",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location4",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location5",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "child_agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "parent_agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "agt_data_visibility_conf",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "AgentAgt_data_visibility_confEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "id_card",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "iban",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "tourist_season",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ticket_type",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "airplane",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "flight",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_airport",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_airport",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "model",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturer",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_company",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_company",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "start_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "end_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "duration_hours",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "tickets_price",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FlightTickets_priceDtoInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "price_flight_per_hour",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "discounts",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "TouristSeasonDiscountDtoInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "type",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "LocationTypeEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forUser",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forAgent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "new_active_agent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "OrderItemDtoInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "description",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "type",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "quantity",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "price_no_vat",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "FlightTickets_priceDtoInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "class_vip",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "class_1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "class_2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "TouristSeasonDiscountDtoInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "vip",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "class_1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "class_2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "CreateInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "input",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "AllItemsKeysInput",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "UpdateInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "input",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "AllItemsKeysInput",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "DeleteInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "input",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "ItemIdentifierInput",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "KurInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "model",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturer",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "GenerateAirtoursTestDataInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forUser",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "forAgent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "ChangeActiveAgentInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "new_active_agent",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "SetUserAgentsInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "UserInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "email",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sub",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "preferredIamRole",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "iamRoles",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "cognitoGroups",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "userPoolId",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "active_agent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "PersonInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "fname",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lname",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "CompanyInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "InvoiceInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_due_date",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_issued_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_number",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "orders",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "total_net",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_gross",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "total_vat",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "vat_percent",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "OrderInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "status",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "items",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "INPUT_OBJECT",
                "name" : "OrderItemDtoInput",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "AirplaneManifacturerInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "AirplaneModelInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "capacity",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturers",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "baseAirplaneModel",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "AgentInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location3",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location4",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "location5",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "child_agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "parent_agents",
            "description" : null,
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          }, {
            "name" : "agt_data_visibility_conf",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "AgentAgt_data_visibility_confEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "TouristInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "public_data_ref",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "fname",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "lname",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "id_card",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "iban",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "tourist_season",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ticket_type",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "airplane",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "flight",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_airport",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_airport",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_country",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "AirplaneInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class_vip",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "nr_seats_class2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "model",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "manifacturer",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "PaymentInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice_number",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "invoice",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_company",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "sender_person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_person",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "recipient_company",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "FlightInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "from_airport",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "to_airport",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "start_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "end_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "duration_hours",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "tickets_price",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "FlightTickets_priceDtoInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "airplane",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "TouristSeasonInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "price_flight_per_hour",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "Float",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "start_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "end_date",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "discounts",
            "description" : null,
            "type" : {
              "kind" : "INPUT_OBJECT",
              "name" : "TouristSeasonDiscountDtoInput",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "LocationInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone1",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "phone2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address1",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "address2",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "type",
            "description" : null,
            "type" : {
              "kind" : "ENUM",
              "name" : "LocationTypeEnum",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "queryBeInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "code",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "name",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "GetGraphqlSchemaInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "HASH",
            "description" : "  interface Item props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "RANGE",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "rev",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Int",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "TITEM",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "checksum",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "ringToken",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "item_state",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_created",
            "description" : " specific props",
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "date_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "AWSDateTime",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_created",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "user_updated",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "ENUM",
          "name" : "AllActionsEnum",
          "description" : null,
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : [ {
            "name" : "start",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "stop",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "create",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "update",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "patch",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "delete",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "query",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "get",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          } ],
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "ENUM",
          "name" : "AllItemTypesEnum",
          "description" : null,
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : [ {
            "name" : "User",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Person",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Company",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Invoice",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Order",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "AirplaneManifacturer",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "AirplaneModel",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Agent",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Tourist",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Airplane",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Payment",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Flight",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "TouristSeason",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Location",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "queryBe",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "GetGraphqlSchema",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "Kur",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "GenerateAirtoursTestData",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ChangeActiveAgent",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "SetUserAgents",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "UserHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "PersonHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "CompanyHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "InvoiceHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "OrderHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "AirplaneManifacturerHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "AirplaneModelHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "AgentHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "TouristHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "AirplaneHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "PaymentHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "FlightHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "TouristSeasonHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "LocationHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "queryBeHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "GetGraphqlSchemaHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "KurHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "GenerateAirtoursTestDataHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ChangeActiveAgentHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "SetUserAgentsHistory",
            "description" : null,
            "isDeprecated" : false,
            "deprecationReason" : null
          } ],
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "INPUT_OBJECT",
          "name" : "BooleanQueryInput",
          "description" : null,
          "fields" : null,
          "inputFields" : [ {
            "name" : "ne",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "eq",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "attribute_exists",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          }, {
            "name" : "attribute_not_exists",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "defaultValue" : null
          } ],
          "interfaces" : null,
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : [ ]
        }, {
          "kind" : "OBJECT",
          "name" : "__Schema",
          "description" : "A GraphQL Introspection defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, the entry points for query, mutation, and subscription operations.",
          "fields" : [ {
            "name" : "types",
            "description" : "A list of all types supported by this server.",
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "__Type",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "queryType",
            "description" : "The type that query operations will be rooted at.",
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "OBJECT",
                "name" : "__Type",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "mutationType",
            "description" : "If this server supports mutation, the type that mutation operations will be rooted at.",
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "__Type",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "directives",
            "description" : "'A list of all directives supported by this server.",
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "__Directive",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "subscriptionType",
            "description" : "'If this server support subscription, the type that subscription operations will be rooted at.",
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "__Type",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "__Type",
          "description" : null,
          "fields" : [ {
            "name" : "kind",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "ENUM",
                "name" : "__TypeKind",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "description",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "fields",
            "description" : null,
            "args" : [ {
              "name" : "includeDeprecated",
              "description" : null,
              "type" : {
                "kind" : "SCALAR",
                "name" : "Boolean",
                "ofType" : null
              },
              "defaultValue" : "false"
            } ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "OBJECT",
                  "name" : "__Field",
                  "ofType" : null
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "interfaces",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "OBJECT",
                  "name" : "__Type",
                  "ofType" : null
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "possibleTypes",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "OBJECT",
                  "name" : "__Type",
                  "ofType" : null
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "enumValues",
            "description" : null,
            "args" : [ {
              "name" : "includeDeprecated",
              "description" : null,
              "type" : {
                "kind" : "SCALAR",
                "name" : "Boolean",
                "ofType" : null
              },
              "defaultValue" : "false"
            } ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "OBJECT",
                  "name" : "__EnumValue",
                  "ofType" : null
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "inputFields",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "OBJECT",
                  "name" : "__InputValue",
                  "ofType" : null
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "ofType",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "OBJECT",
              "name" : "__Type",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "ENUM",
          "name" : "__TypeKind",
          "description" : "An enum describing what kind of type a given __Type is",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : [ {
            "name" : "SCALAR",
            "description" : "Indicates this type is a scalar.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "OBJECT",
            "description" : "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "INTERFACE",
            "description" : "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "UNION",
            "description" : "Indicates this type is a union. `possibleTypes` is a valid field.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ENUM",
            "description" : "Indicates this type is an enum. `enumValues` is a valid field.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "INPUT_OBJECT",
            "description" : "Indicates this type is an input object. `inputFields` is a valid field.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "LIST",
            "description" : "Indicates this type is a list. `ofType` is a valid field.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "NON_NULL",
            "description" : "Indicates this type is a non-null. `ofType` is a valid field.",
            "isDeprecated" : false,
            "deprecationReason" : null
          } ],
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "__Field",
          "description" : null,
          "fields" : [ {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "description",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "args",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "__InputValue",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "OBJECT",
                "name" : "__Type",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "isDeprecated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "Boolean",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "deprecationReason",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "__InputValue",
          "description" : null,
          "fields" : [ {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "description",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "type",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "OBJECT",
                "name" : "__Type",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "defaultValue",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "__EnumValue",
          "description" : null,
          "fields" : [ {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "description",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "isDeprecated",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "Boolean",
                "ofType" : null
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "deprecationReason",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "OBJECT",
          "name" : "__Directive",
          "description" : null,
          "fields" : [ {
            "name" : "name",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "description",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "locations",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "NON_NULL",
                "name" : null,
                "ofType" : {
                  "kind" : "ENUM",
                  "name" : "__DirectiveLocation",
                  "ofType" : null
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "args",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "LIST",
                "name" : null,
                "ofType" : {
                  "kind" : "NON_NULL",
                  "name" : null,
                  "ofType" : {
                    "kind" : "OBJECT",
                    "name" : "__InputValue",
                    "ofType" : null
                  }
                }
              }
            },
            "isDeprecated" : false,
            "deprecationReason" : null,
            "directives" : null
          }, {
            "name" : "onOperation",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "isDeprecated" : true,
            "deprecationReason" : "Use `locations`.",
            "directives" : null
          }, {
            "name" : "onFragment",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "isDeprecated" : true,
            "deprecationReason" : "Use `locations`.",
            "directives" : null
          }, {
            "name" : "onField",
            "description" : null,
            "args" : [ ],
            "type" : {
              "kind" : "SCALAR",
              "name" : "Boolean",
              "ofType" : null
            },
            "isDeprecated" : true,
            "deprecationReason" : "Use `locations`.",
            "directives" : null
          } ],
          "inputFields" : null,
          "interfaces" : [ ],
          "enumValues" : null,
          "possibleTypes" : null,
          "directives" : null
        }, {
          "kind" : "ENUM",
          "name" : "__DirectiveLocation",
          "description" : "An enum describing valid locations where a directive can be placed",
          "fields" : null,
          "inputFields" : null,
          "interfaces" : null,
          "enumValues" : [ {
            "name" : "QUERY",
            "description" : "Indicates the directive is valid on queries.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "MUTATION",
            "description" : "Indicates the directive is valid on mutations.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "FIELD",
            "description" : "Indicates the directive is valid on fields.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "FRAGMENT_DEFINITION",
            "description" : "Indicates the directive is valid on fragment definitions.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "FRAGMENT_SPREAD",
            "description" : "Indicates the directive is valid on fragment spreads.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "INLINE_FRAGMENT",
            "description" : "Indicates the directive is valid on inline fragments.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "SCHEMA",
            "description" : "Indicates the directive is valid on a schema SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "SCALAR",
            "description" : "Indicates the directive is valid on a scalar SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "OBJECT",
            "description" : "Indicates the directive is valid on an object SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "FIELD_DEFINITION",
            "description" : "Indicates the directive is valid on a field SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ARGUMENT_DEFINITION",
            "description" : "Indicates the directive is valid on a field argument SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "INTERFACE",
            "description" : "Indicates the directive is valid on an interface SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "UNION",
            "description" : "Indicates the directive is valid on an union SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ENUM",
            "description" : "Indicates the directive is valid on an enum SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "ENUM_VALUE",
            "description" : "Indicates the directive is valid on an enum value SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "INPUT_OBJECT",
            "description" : "Indicates the directive is valid on an input object SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          }, {
            "name" : "INPUT_FIELD_DEFINITION",
            "description" : "Indicates the directive is valid on an input object field SDL definition.",
            "isDeprecated" : false,
            "deprecationReason" : null
          } ],
          "possibleTypes" : null,
          "directives" : null
        } ],
        "directives" : [ {
          "name" : "include",
          "description" : "Directs the executor to include this field or fragment only when the `if` argument is true",
          "locations" : [ "FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT" ],
          "args" : [ {
            "name" : "if",
            "description" : "Included when true.",
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "Boolean",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "onOperation" : false,
          "onFragment" : true,
          "onField" : true
        }, {
          "name" : "skip",
          "description" : "Directs the executor to skip this field or fragment when the `if`'argument is true.",
          "locations" : [ "FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT" ],
          "args" : [ {
            "name" : "if",
            "description" : "Skipped when true.",
            "type" : {
              "kind" : "NON_NULL",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "Boolean",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "onOperation" : false,
          "onFragment" : true,
          "onField" : true
        }, {
          "name" : "defer",
          "description" : "This directive allows results to be deferred during execution",
          "locations" : [ "FIELD" ],
          "args" : [ ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : true
        }, {
          "name" : "aws_cognito_user_pools",
          "description" : "Tells the service this field/object has access authorized by a Cognito User Pools token.",
          "locations" : [ "OBJECT", "FIELD_DEFINITION" ],
          "args" : [ {
            "name" : "cognito_groups",
            "description" : "List of cognito user pool groups which have access on this field",
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "deprecated",
          "description" : null,
          "locations" : [ "FIELD_DEFINITION", "ENUM_VALUE" ],
          "args" : [ {
            "name" : "reason",
            "description" : null,
            "type" : {
              "kind" : "SCALAR",
              "name" : "String",
              "ofType" : null
            },
            "defaultValue" : "\"No longer supported\""
          } ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_oidc",
          "description" : "Tells the service this field/object has access authorized by an OIDC token.",
          "locations" : [ "OBJECT", "FIELD_DEFINITION" ],
          "args" : [ ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_publish",
          "description" : "Tells the service which subscriptions will be published to when this mutation is called. This directive is deprecated use @aws_susbscribe directive instead.",
          "locations" : [ "FIELD_DEFINITION" ],
          "args" : [ {
            "name" : "subscriptions",
            "description" : "List of subscriptions which will be published to when this mutation is called.",
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_subscribe",
          "description" : "Tells the service which mutation triggers this subscription.",
          "locations" : [ "FIELD_DEFINITION" ],
          "args" : [ {
            "name" : "mutations",
            "description" : "List of mutations which will trigger this subscription when they are called.",
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_api_key",
          "description" : "Tells the service this field/object has access authorized by an API key.",
          "locations" : [ "OBJECT", "FIELD_DEFINITION" ],
          "args" : [ ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_auth",
          "description" : "Directs the schema to enforce authorization on a field",
          "locations" : [ "FIELD_DEFINITION" ],
          "args" : [ {
            "name" : "cognito_groups",
            "description" : "List of cognito user pool groups which have access on this field",
            "type" : {
              "kind" : "LIST",
              "name" : null,
              "ofType" : {
                "kind" : "SCALAR",
                "name" : "String",
                "ofType" : null
              }
            },
            "defaultValue" : null
          } ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_iam",
          "description" : "Tells the service this field/object has access authorized by sigv4 signing.",
          "locations" : [ "OBJECT", "FIELD_DEFINITION" ],
          "args" : [ ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        }, {
          "name" : "aws_lambda",
          "description" : "Tells the service this field/object has access authorized by a Lambda Authorizer.",
          "locations" : [ "OBJECT", "FIELD_DEFINITION" ],
          "args" : [ ],
          "onOperation" : false,
          "onFragment" : false,
          "onField" : false
        } ]
      }
    }
  }