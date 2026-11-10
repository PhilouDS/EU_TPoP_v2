export const PERSIA_TARGETING = {
  id: "persia",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "realmKurdistan"
          },
          {
            values: [3],
            next: "realmCaucasus"
          },
          {
            values: [4],
            next: "georgia"
          },
          {
            values: [5, 6],
            next: "ownerIsfahan"
          }
        ]
      },
      realmKurdistan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKurdistan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmKaraman"
          },
          {
            values: [4, 5, 6],
            next: "realmRum"
          }
        ]
      },
      realmKaraman: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKaraman"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmSyria"
          },
          {
            values: [5, 6],
            next: "realmMacedoniaThrace"
          }
        ]
      },
      realmSyria: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmSyria"
        },
        next: "ownerQahirah"
      },
      ownerQahirah: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerQahirah"
        }
      },
      realmRum: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmRum"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmMacedoniaThrace"
          },
          {
            values: [3, 4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "georgia"
          }
        ]
      },
      realmCaucasus: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCaucasus"
        },
        branches: [
          {
            values: [1],
            next: "realmRum"
          },
          {
            values: [2, 3],
            next: "realmCircassia"
          },
          {
            values: [4, 5, 6],
            next: "ownerAstrakhan"
          }
        ]
      },
      georgia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.georgia"
        },
        branches: [
          {
            values: [1],
            next: "realmCaucasus"
          },
          {
            values: [2, 3],
            next: "realmCircassia"
          },
          {
            values: [4],
            next: "ownerAstrakhan"
          },
          {
            values: [5, 6],
            next: "ownerIsfahan"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmCrimea"
          },
          {
            values: [4, 5, 6],
            next: "ownerAstrakhan"
          }
        ]
      },
      ownerAstrakhan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerAstrakhan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerNogai"
          },
          {
            values: [4, 5, 6],
            next: "ownerSamarkand"
          }
        ]
      },
      ownerNogai: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNogai"
        },
        next: "ownerSamarkand"
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmMacedoniaThrace"
          },
          {
            values: [3, 4],
            next: "realmWesternUkraine"
          },
          {
            values: [5, 6],
            next: "muscovyRussia"
          }
        ]
      },
      realmMacedoniaThrace: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMacedoniaThrace"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerChagatai"
          },
          {
            values: [4, 5, 6],
            next: "muscovyRussia"
          }
        ]
      },
      realmWesternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmWesternUkraine"
        },
        next: "muscovyRussia"
      },
      ownerChagatai: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerChagatai"
        },
        next: "ownerKazakhstan"
      },
      muscovyRussia: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.muscovyRussia"
        },
        next: "ownerKazakhstan"
      },
      ownerKazakhstan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerKazakhstan"
        }
      },
      ownerIsfahan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerIsfahan"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerHerat"
          },
          {
            values: [3, 4],
            next: "ownerFars"
          },
          {
            values: [5, 6],
            next: "ownerBasra"
          }
        ]
      },
      ownerHerat: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHerat"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerSamarkand"
          },
          {
            values: [3, 4],
            next: "ownerBaluchistan"
          },
          {
            values: [5, 6],
            next: "ownerBalkh"
          }
        ]
      },
      ownerFars: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerFars"
        },
        next: "ownerBaluchistan"
      },
      ownerBasra: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBasra"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBaluchistan"
          },
          {
            values: [4, 5, 6],
            next: "ownerHormuz"
          }
        ]
      },
      ownerSamarkand: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSamarkand"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerKazakhstan"
          },
          {
            values: [4, 5, 6],
            next: "ownerBalkh"
          }
        ]
      },
      ownerBaluchistan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBaluchistan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerBalkh"
          },
          {
            values: [4, 5, 6],
            next: "ownerGujarat"
          }
        ]
      },
      ownerHormuz: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHormuz"
        },
        next: "ownerGujarat"
      },
      ownerBalkh: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBalkh"
        },
        next: "ownerDelhi"
      },
      ownerGujarat: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerGujarat"
        },
        next: "ownerBengal"
      },
      ownerDelhi: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerDelhi"
        },
        next: "ownerBengal"
      },
      ownerBengal: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerBengal"
        }
      }
    }
  },
  diplomatic: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "aqQoyunlu"
          },
          {
            values: [3, 4],
            next: "crimea"
          },
          {
            values: [5],
            next: "realmMoldavia"
          },
          {
            values: [6],
            next: "greatHorde"
          }
        ]
      },
      aqQoyunlu: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.aqQoyunlu"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmKaraman"
          },
          {
            values: [3, 4],
            next: "realmCircassia"
          },
          {
            values: [5, 6],
            next: "crimea"
          }
        ]
      },
      realmKaraman: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmKaraman"
        },
        next: "mamluks"
      },
      mamluks: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.mamluks"
        },
        next: "ottomans"
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        }
      },
      crimea: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.crimea"
        },
        branches: [
          {
            values: [1, 2],
            next: "aqQoyunlu"
          },
          {
            values: [3, 4, 5],
            next: "realmCircassia"
          },
          {
            values: [6],
            next: "realmEasternUkraine"
          }
        ]
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        next: "venice"
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "austria"
      },
      austria: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.austria"
        }
      },
      realmMoldavia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMoldavia"
        },
        next: "realmEasternUkraine"
      },
      realmEasternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEasternUkraine"
        },
        branches: [
          {
            values: [1, 2],
            next: "hungary"
          },
          {
            values: [3, 4],
            next: "realmPrussia"
          },
          {
            values: [5, 6],
            next: "novgorod"
          }
        ]
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        },
        next: "austria"
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "realmMuscowRyazan"
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmPrussia"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmMuscowRyazan"
          }
        ]
      },
      greatHorde: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.greatHorde"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmEasternUkraine"
          },
          {
            values: [4, 5, 6],
            next: "kazan"
          }
        ]
      },
      kazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kazan"
        },
        next: "realmMuscowRyazan"
      },
      realmMuscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMuscowRyazan"
        }
      }
    }
  }
};
