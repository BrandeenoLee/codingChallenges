Array.prototype.flatMap = function (f)
{
  return this.reduce ((acc, x) =>
    acc.concat (f (x)), [])
}

// your data   
const routes =
    [ { name : "userManagement"
      , childRoutes :
            [ { name : "blogManagement"
              , childRoutes :
                    [ { name : "blog"
                      , menu : { role : 1020 }
                      }
                    ]
              }
            , { name : "organizationList"
              , menu : { role : 1004 }
              }
            ]
      }
    , { name : "test"
      , menu : { role : 4667 }
      }
    ]

// flat-mapped routes
const allChildRoutes =
  routes.flatMap (function loop (node) {
    if (node.childRoutes)
      return node.childRoutes.flatMap (loop)
    else
      return [node]
  })     
  
console.log (allChildRoutes)
