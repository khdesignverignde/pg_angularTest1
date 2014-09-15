(function(){
    var testData = [
                    {
                      "_id": "5416d6cc9f23818bb584db9a",
                      "index": 0,
                      "guid": "e81b9470-a994-4878-bb5a-482cc826e1c8",
                      "isActive": false,
                      "balance": "$2,281.68",
                      "picture": "http://placehold.it/32x32",
                      "age": 22,
                      "eyeColor": "blue",
                      "name": {
                        "first": "Thelma",
                        "last": "Bass"
                      },
                      "company": "EXODOC",
                      "email": "thelma.bass@exodoc.com",
                      "phone": "+1 (992) 432-3125",
                      "address": "763 Rock Street, Smock, Alabama, 461",
                      "about": "Occaecat in minim cillum est do eiusmod pariatur dolore. Exercitation dolor aliqua sint nulla sunt irure anim. Excepteur ea fugiat officia deserunt ad non incididunt qui ex consequat culpa cupidatat. Qui enim anim adipisicing exercitation adipisicing elit reprehenderit. Laboris proident deserunt est occaecat excepteur nostrud proident ipsum commodo.\r\n",
                      "registered": "Saturday, March 8, 2014 1:34 PM",
                      "latitude": 38.575556,
                      "longitude": 109.647883,
                      "tags": [
                        "nostrud",
                        "sint",
                        "officia",
                        "reprehenderit",
                        "veniam",
                        "quis",
                        "duis"
                      ],
                      "range": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "friends": [
                        {
                          "id": 0,
                          "name": "Adele Martin"
                        },
                        {
                          "id": 1,
                          "name": "Latonya William"
                        },
                        {
                          "id": 2,
                          "name": "Church Wilder"
                        }
                      ],
                      "greeting": "Hello, Thelma! You have 10 unread messages.",
                      "favoriteFruit": "banana"
                    },
                    {
                      "_id": "5416d6ccec153564dddf7d6b",
                      "index": 1,
                      "guid": "0b9e95a0-648a-4c46-a2cb-255c60cd9f8d",
                      "isActive": true,
                      "balance": "$3,507.76",
                      "picture": "http://placehold.it/32x32",
                      "age": 39,
                      "eyeColor": "green",
                      "name": {
                        "first": "Loretta",
                        "last": "Mcdowell"
                      },
                      "company": "METROZ",
                      "email": "loretta.mcdowell@metroz.me",
                      "phone": "+1 (809) 596-3214",
                      "address": "321 Amity Street, Greenwich, Oregon, 234",
                      "about": "Eiusmod exercitation aliquip laborum consectetur enim nulla. Pariatur ad consectetur et in consectetur exercitation officia magna qui. Occaecat anim ea tempor consectetur nulla sunt et.\r\n",
                      "registered": "Tuesday, July 29, 2014 5:31 AM",
                      "latitude": -4.659014,
                      "longitude": 167.027217,
                      "tags": [
                        "aute",
                        "laborum",
                        "aliqua",
                        "veniam",
                        "voluptate",
                        "pariatur",
                        "ex"
                      ],
                      "range": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "friends": [
                        {
                          "id": 0,
                          "name": "Morse Solis"
                        },
                        {
                          "id": 1,
                          "name": "Kirk Chambers"
                        },
                        {
                          "id": 2,
                          "name": "Kelly Mcgee"
                        }
                      ],
                      "greeting": "Hello, Loretta! You have 9 unread messages.",
                      "favoriteFruit": "banana"
                    },
                    {
                      "_id": "5416d6cc31e5147f1f1d4dc0",
                      "index": 2,
                      "guid": "58e3184a-e6ac-4839-9817-4fe9892a1e73",
                      "isActive": false,
                      "balance": "$2,307.30",
                      "picture": "http://placehold.it/32x32",
                      "age": 37,
                      "eyeColor": "green",
                      "name": {
                        "first": "Durham",
                        "last": "Holloway"
                      },
                      "company": "ZYTREK",
                      "email": "durham.holloway@zytrek.info",
                      "phone": "+1 (874) 460-2026",
                      "address": "462 Clymer Street, Delshire, Wisconsin, 1782",
                      "about": "Nostrud laboris dolore culpa aliqua laboris occaecat amet qui cillum ex consequat ipsum dolore. Elit ea labore cupidatat veniam nulla consequat nostrud. Velit duis reprehenderit pariatur aliquip pariatur. Et anim sit officia velit occaecat laboris. Est ex aliquip magna pariatur ex ullamco qui pariatur voluptate laboris id. Proident veniam velit commodo proident esse laborum.\r\n",
                      "registered": "Sunday, February 23, 2014 1:16 AM",
                      "latitude": -37.401223,
                      "longitude": 131.770387,
                      "tags": [
                        "duis",
                        "minim",
                        "sint",
                        "fugiat",
                        "irure",
                        "eiusmod",
                        "ea"
                      ],
                      "range": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "friends": [
                        {
                          "id": 0,
                          "name": "Garcia Thomas"
                        },
                        {
                          "id": 1,
                          "name": "Barry Bryant"
                        },
                        {
                          "id": 2,
                          "name": "Concepcion Delacruz"
                        }
                      ],
                      "greeting": "Hello, Durham! You have 5 unread messages.",
                      "favoriteFruit": "apple"
                    },
                    {
                      "_id": "5416d6cc2e0c483f22e57072",
                      "index": 3,
                      "guid": "5ef82964-0fd1-4414-8401-43b10dd69492",
                      "isActive": true,
                      "balance": "$3,127.55",
                      "picture": "http://placehold.it/32x32",
                      "age": 29,
                      "eyeColor": "green",
                      "name": {
                        "first": "Chambers",
                        "last": "Garrison"
                      },
                      "company": "EXERTA",
                      "email": "chambers.garrison@exerta.ca",
                      "phone": "+1 (969) 571-2107",
                      "address": "559 Dekalb Avenue, Sterling, Washington, 1360",
                      "about": "Fugiat et consequat nisi qui voluptate proident ipsum nisi ad ad. Fugiat in do ullamco in enim non. Amet nulla sunt nostrud ut id. Sint officia nulla minim culpa mollit commodo exercitation Lorem culpa sint voluptate aliquip do. Esse ullamco amet ullamco exercitation anim est consectetur minim ullamco. Pariatur consectetur sunt proident magna culpa ea occaecat labore sit eu culpa exercitation dolor proident. Commodo dolor aute cillum ad duis tempor sit consequat eiusmod.\r\n",
                      "registered": "Wednesday, March 12, 2014 12:08 PM",
                      "latitude": -75.803436,
                      "longitude": -32.157682,
                      "tags": [
                        "fugiat",
                        "Lorem",
                        "in",
                        "laborum",
                        "cillum",
                        "officia",
                        "culpa"
                      ],
                      "range": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "friends": [
                        {
                          "id": 0,
                          "name": "Nelson Cobb"
                        },
                        {
                          "id": 1,
                          "name": "Ava Wiley"
                        },
                        {
                          "id": 2,
                          "name": "Glass Walker"
                        }
                      ],
                      "greeting": "Hello, Chambers! You have 8 unread messages.",
                      "favoriteFruit": "strawberry"
                    },
                    {
                      "_id": "5416d6cc28e077c67cd06405",
                      "index": 4,
                      "guid": "f97f2fc6-50c8-49f6-b99c-eff65aab154c",
                      "isActive": false,
                      "balance": "$3,680.97",
                      "picture": "http://placehold.it/32x32",
                      "age": 29,
                      "eyeColor": "brown",
                      "name": {
                        "first": "Gabrielle",
                        "last": "Torres"
                      },
                      "company": "HATOLOGY",
                      "email": "gabrielle.torres@hatology.biz",
                      "phone": "+1 (930) 420-2281",
                      "address": "723 Atlantic Avenue, Kraemer, New Jersey, 4029",
                      "about": "Ex laborum ex magna excepteur aliqua. Nulla exercitation officia sit veniam est id in ullamco tempor et eiusmod adipisicing velit. Ad occaecat sunt ex anim. Mollit pariatur occaecat commodo reprehenderit occaecat proident commodo voluptate proident aliqua et nostrud aliquip occaecat. Cupidatat quis eu et qui est cillum aliquip anim adipisicing in. Do ipsum nisi eu tempor officia elit esse ad proident dolor voluptate aute nisi.\r\n",
                      "registered": "Wednesday, March 5, 2014 10:55 AM",
                      "latitude": -25.495264,
                      "longitude": -172.435645,
                      "tags": [
                        "Lorem",
                        "esse",
                        "sit",
                        "id",
                        "exercitation",
                        "id",
                        "labore"
                      ],
                      "range": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                      ],
                      "friends": [
                        {
                          "id": 0,
                          "name": "Jimmie Kirkland"
                        },
                        {
                          "id": 1,
                          "name": "Isabelle Quinn"
                        },
                        {
                          "id": 2,
                          "name": "Opal Reid"
                        }
                      ],
                      "greeting": "Hello, Gabrielle! You have 10 unread messages.",
                      "favoriteFruit": "strawberry"
                    }
                  ];
        
        
    
    var app = angular.module('pgtest', []);
    
    
    
    app.controller('PgTestController', ['$http',function(){
        this.asd = '123'; 
        
        this.testData = testData;
        
        
//        $http.get('js/data/testData.json').success(function(data){
//            pgtest.testData = data;
//        }).error(function(){
//            alert('http error');
//        });
    }]);
    
    
}());