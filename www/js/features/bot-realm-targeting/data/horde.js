export const HORDE_TARGETING = {
  id: "horde",
  military: {
    startNode: "root",
    nodes: {
      root: {
        branches: [
          {
            values: [1, 2],
            next: "kazan"
          },
          {
            values: [3],
            next: "oneTaxNprMoscowRyazan"
          },
          {
            values: [4],
            next: "realmCircassia"
          },
          {
            values: [5],
            next: "realmCaucasus"
          },
          {
            values: [6],
            next: "raid"
          }
        ]
      },
      kazan: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.kazan"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "nogai"
          },
          {
            values: [4],
            next: "realmPerm"
          },
          {
            values: [5, 6],
            next: "oneTaxNprMoscowRyazan"
          }
        ]
      },
      oneTaxNprMoscowRyazan: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.oneTaxNprMoscowRyazan"
        },
        branches: [
          {
            values: [1, 2],
            next: "kazan"
          },
          {
            values: [3, 4],
            next: "realmPerm"
          },
          {
            values: [5, 6],
            next: "realmCentralRussia"
          }
        ]
      },
      realmPerm: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPerm"
        },
        branches: [
          {
            values: [1, 2],
            next: "nogai"
          },
          {
            values: [3, 4, 5, 6],
            next: "realmCentralRussia"
          }
        ]
      },
      nogai: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.nogai"
        },
        branches: [
          {
            values: [1, 2],
            next: "ownerTyumen"
          },
          {
            values: [3, 4],
            next: "ownerSamarkand"
          },
          {
            values: [5, 6],
            next: "realmPerm"
          }
        ]
      },
      ownerTyumen: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTyumen"
        },
        next: "ownerChagatai"
      },
      ownerChagatai: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerChagatai"
        },
        next: "ownerMongolia"
      },
      ownerMongolia: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMongolia"
        },
        next: "ownerXian"
      },
      ownerXian: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerXian"
        }
      },
      ownerSamarkand: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerSamarkand"
        },
        next: "ownerHerat"
      },
      ownerHerat: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerHerat"
        },
        next: "ownerIsfahan"
      },
      realmCentralRussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCentralRussia"
        },
        branches: [
          {
            values: [1, 2, 3, 4],
            next: "realmPerm"
          },
          {
            values: [5, 6],
            next: "ownerMoskva"
          }
        ]
      },
      ownerMoskva: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerMoskva"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "ownerNovgorod"
          },
          {
            values: [4, 5, 6],
            next: "realmLithuania"
          }
        ]
      },
      ownerNovgorod: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerNovgorod"
        },
        next: "realmLithuania"
      },
      realmLithuania: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmLithuania"
        },
        next: "polandCommonwealth"
      },
      polandCommonwealth: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.polandCommonwealth"
        }
      },
      realmCircassia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCircassia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmEasternUkraine"
          },
          {
            values: [3, 4],
            next: "realmCrimea"
          },
          {
            values: [5, 6],
            next: "realmTranscaucasia"
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
            values: [1, 2, 3],
            next: "realmCrimea"
          },
          {
            values: [4, 5, 6],
            next: "realmTranscaucasia"
          }
        ]
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "realmEasternUkraine"
          },
          {
            values: [4, 5, 6],
            next: "realmMoldavia"
          }
        ]
      },
      realmEasternUkraine: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmEasternUkraine"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmLithuania"
          },
          {
            values: [3, 4],
            next: "polandCommonwealth"
          },
          {
            values: [5, 6],
            next: "realmMoldavia"
          }
        ]
      },
      realmMoldavia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMoldavia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmEasternUkraine"
          },
          {
            values: [3, 4],
            next: "polandCommonwealth"
          },
          {
            values: [5, 6],
            next: "realmThraceMacedonia"
          }
        ]
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        },
        next: "ownerIsfahan"
      },
      realmThraceMacedonia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmThraceMacedonia"
        }
      },
      ownerIsfahan: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerIsfahan"
        }
      },
      raid: {
        target: {
          type: "special",
          labelKey: "botRealmTargeting.targets.raid"
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
            next: "realmCrimea"
          },
          {
            values: [3, 4],
            next: "realmTranscaucasia"
          },
          {
            values: [5],
            next: "novgorod"
          },
          {
            values: [6],
            next: "kazan"
          }
        ]
      },
      realmCrimea: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmCrimea"
        },
        branches: [
          {
            values: [1, 2],
            next: "ottomans"
          },
          {
            values: [3, 4],
            next: "realmCircassia"
          },
          {
            values: [5, 6],
            next: "realmTranscaucasia"
          }
        ]
      },
      realmTranscaucasia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmTranscaucasia"
        },
        branches: [
          {
            values: [1, 2],
            next: "realmCrimea"
          },
          {
            values: [3, 4],
            next: "realmCircassia"
          },
          {
            values: [5, 6],
            next: "realmKurdistan"
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
            next: "realmKurdistan"
          },
          {
            values: [4, 5, 6],
            next: "mamluks"
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
            next: "realmCircassia"
          },
          {
            values: [4, 5, 6],
            next: "mamluks"
          }
        ]
      },
      ottomans: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.ottomans"
        },
        next: "venice"
      },
      venice: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.venice"
        },
        next: "mamluks"
      },
      mamluks: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.mamluks"
        },
        next: "ownerTabriz"
      },
      ownerTabriz: {
        target: {
          type: "ownerOfProvince",
          labelKey: "botRealmTargeting.targets.ownerTabriz"
        }
      },
      novgorod: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.novgorod"
        },
        branches: [
          {
            values: [1, 2, 3],
            next: "sweden"
          },
          {
            values: [4, 5, 6],
            next: "realmMuscowRyazan"
          }
        ]
      },
      sweden: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.sweden"
        },
        next: "realmPrussia"
      },
      realmPrussia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmPrussia"
        },
        next: "hungary"
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
        },
        next: "realmMoldavia"
      },
      realmMoldavia: {
        target: {
          type: "realmInArea",
          labelKey: "botRealmTargeting.targets.realmMoldavia"
        },
        next: "hungary"
      },
      hungary: {
        target: {
          type: "realm",
          labelKey: "botRealmTargeting.targets.hungary"
        }
      }
    }
  }
};
