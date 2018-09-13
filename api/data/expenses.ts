interface Expense {
  id: string;
  amount: {
    value: string,
    currency: string
  };
  date: string;
  merchant: string;
  receipts: any[];
  comment: string;
  category: string;
  user: {
    first: string,
    last: string,
    email: string
  };
}

export const expenses: Expense[] = [
  {
    id: '5b995dff2e3cb74644948a66',
    amount: {
      value: '2149.29',
      currency: 'GBP'
    },
    date: '2017-06-21T08:45:09.326Z',
    merchant: 'QUONK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Atkins',
      last: 'Blackburn',
      email: 'atkins.blackburn@pleo.io'
    }
  },
  {
    id: '5b995dffdeec40464bd614bf',
    amount: {
      value: '731.92',
      currency: 'EUR'
    },
    date: '2017-05-30T14:12:31.054Z',
    merchant: 'WRAPTURE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Barbara',
      last: 'Downs',
      email: 'barbara.downs@pleo.io'
    }
  },
  {
    id: '5b995dffcc602abb5c700771',
    amount: {
      value: '603.42',
      currency: 'EUR'
    },
    date: '2017-06-19T23:01:32.198Z',
    merchant: 'SENMAO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Berta',
      last: 'Wise',
      email: 'berta.wise@pleo.io'
    }
  },
  {
    id: '5b995dffb6be4eed170194ad',
    amount: {
      value: '2110.74',
      currency: 'GBP'
    },
    date: '2014-09-16T04:02:29.331Z',
    merchant: 'UPDAT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Guadalupe',
      last: 'Bolton',
      email: 'guadalupe.bolton@pleo.io'
    }
  },
  {
    id: '5b995dffb04fa69737b7bc0a',
    amount: {
      value: '2905.02',
      currency: 'GBP'
    },
    date: '2014-04-10T23:16:08.764Z',
    merchant: 'ZORROMOP',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Irma',
      last: 'Jarvis',
      email: 'irma.jarvis@pleo.io'
    }
  },
  {
    id: '5b995dff532e0505c6059b83',
    amount: {
      value: '3950.01',
      currency: 'GBP'
    },
    date: '2015-03-16T16:51:35.666Z',
    merchant: 'POLARAX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Wong',
      last: 'Solis',
      email: 'wong.solis@pleo.io'
    }
  },
  {
    id: '5b995dff26b34bf970c0f432',
    amount: {
      value: '3780.84',
      currency: 'EUR'
    },
    date: '2016-01-03T08:29:14.959Z',
    merchant: 'NURPLEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mitchell',
      last: 'Moody',
      email: 'mitchell.moody@pleo.io'
    }
  },
  {
    id: '5b995dffbb46057fa1ba1d9d',
    amount: {
      value: '2129.48',
      currency: 'EUR'
    },
    date: '2017-02-23T13:02:20.101Z',
    merchant: 'YURTURE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Debora',
      last: 'Leach',
      email: 'debora.leach@pleo.io'
    }
  },
  {
    id: '5b995dff58a8f58befbe5267',
    amount: {
      value: '1721.58',
      currency: 'DKK'
    },
    date: '2016-01-31T18:31:48.972Z',
    merchant: 'DUFLEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Eloise',
      last: 'Holcomb',
      email: 'eloise.holcomb@pleo.io'
    }
  },
  {
    id: '5b995dff9576dd083d05b4bd',
    amount: {
      value: '1660.67',
      currency: 'GBP'
    },
    date: '2017-06-18T10:45:38.038Z',
    merchant: 'APPLIDECK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Carissa',
      last: 'Hickman',
      email: 'carissa.hickman@pleo.io'
    }
  },
  {
    id: '5b995dff32aa95cc0b45feb7',
    amount: {
      value: '3926.79',
      currency: 'DKK'
    },
    date: '2018-05-12T12:53:41.495Z',
    merchant: 'KRAG',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Dominique',
      last: 'Hoover',
      email: 'dominique.hoover@pleo.io'
    }
  },
  {
    id: '5b995dff399cfe97db167ae9',
    amount: {
      value: '227.73',
      currency: 'DKK'
    },
    date: '2017-05-28T06:40:35.365Z',
    merchant: 'STELAECOR',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Maria',
      last: 'Mcknight',
      email: 'maria.mcknight@pleo.io'
    }
  },
  {
    id: '5b995dff499a5a7823d7ae3d',
    amount: {
      value: '1232.26',
      currency: 'GBP'
    },
    date: '2017-01-19T05:45:23.857Z',
    merchant: 'QUIZKA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ray',
      last: 'Mendoza',
      email: 'ray.mendoza@pleo.io'
    }
  },
  {
    id: '5b995dff190ecded8b606e26',
    amount: {
      value: '2042.46',
      currency: 'GBP'
    },
    date: '2015-08-10T05:48:00.257Z',
    merchant: 'MARQET',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bartlett',
      last: 'Webb',
      email: 'bartlett.webb@pleo.io'
    }
  },
  {
    id: '5b995dff3ab30be854b10fd6',
    amount: {
      value: '1354.45',
      currency: 'EUR'
    },
    date: '2017-05-20T04:43:41.788Z',
    merchant: 'JUMPSTACK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bender',
      last: 'Stout',
      email: 'bender.stout@pleo.io'
    }
  },
  {
    id: '5b995dffca53e0e292a6c7ef',
    amount: {
      value: '1494.41',
      currency: 'GBP'
    },
    date: '2017-02-01T04:12:48.146Z',
    merchant: 'EMPIRICA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Marshall',
      last: 'Sullivan',
      email: 'marshall.sullivan@pleo.io'
    }
  },
  {
    id: '5b995dff1f624c2bd862eac3',
    amount: {
      value: '3912.66',
      currency: 'DKK'
    },
    date: '2015-04-17T21:26:09.308Z',
    merchant: 'JASPER',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Brown',
      last: 'Medina',
      email: 'brown.medina@pleo.io'
    }
  },
  {
    id: '5b995dffebc765e96f98bee1',
    amount: {
      value: '1335.01',
      currency: 'EUR'
    },
    date: '2015-06-06T02:57:22.629Z',
    merchant: 'DIGIRANG',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Butler',
      last: 'Maldonado',
      email: 'butler.maldonado@pleo.io'
    }
  },
  {
    id: '5b995dff75ffa69322e76673',
    amount: {
      value: '18.64',
      currency: 'EUR'
    },
    date: '2017-04-16T16:36:03.758Z',
    merchant: 'QUILITY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Sofia',
      last: 'Brady',
      email: 'sofia.brady@pleo.io'
    }
  },
  {
    id: '5b995dffacab730f639bb6e6',
    amount: {
      value: '2146.13',
      currency: 'EUR'
    },
    date: '2015-06-03T12:50:02.352Z',
    merchant: 'KNOWLYSIS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Matilda',
      last: 'Copeland',
      email: 'matilda.copeland@pleo.io'
    }
  },
  {
    id: '5b995dff23124b8752a52039',
    amount: {
      value: '1729.41',
      currency: 'DKK'
    },
    date: '2018-04-03T18:30:28.548Z',
    merchant: 'DIGIAL',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Weaver',
      last: 'Vazquez',
      email: 'weaver.vazquez@pleo.io'
    }
  },
  {
    id: '5b995dffdcb62d028cbb18c8',
    amount: {
      value: '3274.68',
      currency: 'EUR'
    },
    date: '2014-09-06T12:04:20.722Z',
    merchant: 'PRISMATIC',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Cardenas',
      last: 'Hartman',
      email: 'cardenas.hartman@pleo.io'
    }
  },
  {
    id: '5b995dff5093d900c850d380',
    amount: {
      value: '626.64',
      currency: 'DKK'
    },
    date: '2016-05-26T06:42:24.102Z',
    merchant: 'PARLEYNET',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Lawrence',
      last: 'Allen',
      email: 'lawrence.allen@pleo.io'
    }
  },
  {
    id: '5b995dff317f31c1d075e131',
    amount: {
      value: '198.69',
      currency: 'GBP'
    },
    date: '2016-06-08T17:37:30.593Z',
    merchant: 'KOZGENE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Lila',
      last: 'Espinoza',
      email: 'lila.espinoza@pleo.io'
    }
  },
  {
    id: '5b995dff74de7f7c48f460f5',
    amount: {
      value: '1276.81',
      currency: 'DKK'
    },
    date: '2015-03-11T17:51:53.076Z',
    merchant: 'ZILIDIUM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Penny',
      last: 'Dejesus',
      email: 'penny.dejesus@pleo.io'
    }
  },
  {
    id: '5b995dff3ff3f164a54d17f1',
    amount: {
      value: '2908.29',
      currency: 'GBP'
    },
    date: '2015-08-13T04:03:57.388Z',
    merchant: 'QUILTIGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Small',
      last: 'Ochoa',
      email: 'small.ochoa@pleo.io'
    }
  },
  {
    id: '5b995dffbfec33f0548b8861',
    amount: {
      value: '3003.86',
      currency: 'DKK'
    },
    date: '2015-02-26T13:11:53.943Z',
    merchant: 'ZILLACON',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Janette',
      last: 'Mooney',
      email: 'janette.mooney@pleo.io'
    }
  },
  {
    id: '5b995dffc08493ea1bfbb685',
    amount: {
      value: '482.33',
      currency: 'GBP'
    },
    date: '2018-01-14T22:38:10.896Z',
    merchant: 'MOBILDATA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Selena',
      last: 'Mcmillan',
      email: 'selena.mcmillan@pleo.io'
    }
  },
  {
    id: '5b995dff6f4c669a1f9d756e',
    amount: {
      value: '1080.25',
      currency: 'DKK'
    },
    date: '2014-05-09T09:11:18.600Z',
    merchant: 'ZENTURY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Heather',
      last: 'Keith',
      email: 'heather.keith@pleo.io'
    }
  },
  {
    id: '5b995dffdcc570a391c673b3',
    amount: {
      value: '1790.19',
      currency: 'EUR'
    },
    date: '2016-03-01T09:41:41.936Z',
    merchant: 'PLASMOSIS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Silvia',
      last: 'Wilder',
      email: 'silvia.wilder@pleo.io'
    }
  },
  {
    id: '5b995dff2da817e5a4a27ae6',
    amount: {
      value: '1802.36',
      currency: 'DKK'
    },
    date: '2017-11-06T07:50:15.471Z',
    merchant: 'BEDDER',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Gallegos',
      last: 'Tanner',
      email: 'gallegos.tanner@pleo.io'
    }
  },
  {
    id: '5b995dff9996b92bca3623d0',
    amount: {
      value: '697.77',
      currency: 'EUR'
    },
    date: '2017-09-19T05:43:58.317Z',
    merchant: 'XIXAN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Downs',
      last: 'Savage',
      email: 'downs.savage@pleo.io'
    }
  },
  {
    id: '5b995dff8753b58e227a764c',
    amount: {
      value: '1228.16',
      currency: 'GBP'
    },
    date: '2018-01-16T04:38:39.682Z',
    merchant: 'KIOSK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Spence',
      last: 'Ballard',
      email: 'spence.ballard@pleo.io'
    }
  },
  {
    id: '5b995dffa004a60eee373ecb',
    amount: {
      value: '163.85',
      currency: 'DKK'
    },
    date: '2017-12-08T00:14:14.498Z',
    merchant: 'VALREDA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Amelia',
      last: 'Hobbs',
      email: 'amelia.hobbs@pleo.io'
    }
  },
  {
    id: '5b995dffd2550a12f69efcca',
    amount: {
      value: '524.13',
      currency: 'DKK'
    },
    date: '2015-05-07T08:42:49.040Z',
    merchant: 'QUILCH',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Janis',
      last: 'Dyer',
      email: 'janis.dyer@pleo.io'
    }
  },
  {
    id: '5b995dffdde8778c8aaddeda',
    amount: {
      value: '2814.13',
      currency: 'DKK'
    },
    date: '2014-06-02T22:42:05.643Z',
    merchant: 'OCTOCORE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Renee',
      last: 'Bridges',
      email: 'renee.bridges@pleo.io'
    }
  },
  {
    id: '5b995dff346b8bc2c8674a6a',
    amount: {
      value: '3943.38',
      currency: 'EUR'
    },
    date: '2015-05-05T16:36:06.595Z',
    merchant: 'AMTAP',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Vivian',
      last: 'Munoz',
      email: 'vivian.munoz@pleo.io'
    }
  },
  {
    id: '5b995dffc0654be40bb56f1e',
    amount: {
      value: '2431.36',
      currency: 'DKK'
    },
    date: '2014-08-06T22:47:29.835Z',
    merchant: 'BRISTO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Carolina',
      last: 'Lopez',
      email: 'carolina.lopez@pleo.io'
    }
  },
  {
    id: '5b995dffe9444395941ee495',
    amount: {
      value: '3803.23',
      currency: 'DKK'
    },
    date: '2016-03-10T19:40:17.993Z',
    merchant: 'AFFLUEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'William',
      last: 'Francis',
      email: 'william.francis@pleo.io'
    }
  },
  {
    id: '5b995dff44825fc6f30c97d4',
    amount: {
      value: '3288.48',
      currency: 'GBP'
    },
    date: '2015-11-06T16:06:52.245Z',
    merchant: 'ROCKABYE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Sheryl',
      last: 'Hunt',
      email: 'sheryl.hunt@pleo.io'
    }
  },
  {
    id: '5b995dffc2aa1a91289082a9',
    amount: {
      value: '1213.29',
      currency: 'DKK'
    },
    date: '2017-04-02T23:07:01.968Z',
    merchant: 'TERRAGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ronda',
      last: 'Nunez',
      email: 'ronda.nunez@pleo.io'
    }
  },
  {
    id: '5b995dff8acdb7764003a9a4',
    amount: {
      value: '2999.51',
      currency: 'GBP'
    },
    date: '2017-07-13T10:48:59.380Z',
    merchant: 'BUZZWORKS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Cathy',
      last: 'Mccormick',
      email: 'cathy.mccormick@pleo.io'
    }
  },
  {
    id: '5b995dff567ee4021e4bdbae',
    amount: {
      value: '3860.23',
      currency: 'EUR'
    },
    date: '2014-10-28T23:36:08.142Z',
    merchant: 'TYPHONICA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Fletcher',
      last: 'Gaines',
      email: 'fletcher.gaines@pleo.io'
    }
  },
  {
    id: '5b995dff32fce1671a025316',
    amount: {
      value: '704.92',
      currency: 'EUR'
    },
    date: '2017-06-07T23:16:55.055Z',
    merchant: 'RODEMCO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Hawkins',
      last: 'Hyde',
      email: 'hawkins.hyde@pleo.io'
    }
  },
  {
    id: '5b995dff87024916e382ff9a',
    amount: {
      value: '900.47',
      currency: 'GBP'
    },
    date: '2016-12-17T12:59:13.036Z',
    merchant: 'ZENSUS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ellison',
      last: 'Gutierrez',
      email: 'ellison.gutierrez@pleo.io'
    }
  },
  {
    id: '5b995dff4bfcacbb9bb37a7c',
    amount: {
      value: '269.65',
      currency: 'GBP'
    },
    date: '2018-05-15T07:33:37.031Z',
    merchant: 'ENTOGROK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Claire',
      last: 'Leonard',
      email: 'claire.leonard@pleo.io'
    }
  },
  {
    id: '5b995dff09ebef35d7c4785d',
    amount: {
      value: '1831.06',
      currency: 'DKK'
    },
    date: '2014-12-24T16:09:08.229Z',
    merchant: 'INTERLOO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Thornton',
      last: 'Watson',
      email: 'thornton.watson@pleo.io'
    }
  },
  {
    id: '5b995dff37b46a294546162d',
    amount: {
      value: '729.24',
      currency: 'EUR'
    },
    date: '2014-03-17T02:35:59.394Z',
    merchant: 'NITRACYR',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Estelle',
      last: 'Monroe',
      email: 'estelle.monroe@pleo.io'
    }
  },
  {
    id: '5b995dff320f98ae6f5638be',
    amount: {
      value: '361.41',
      currency: 'EUR'
    },
    date: '2015-04-17T06:21:20.415Z',
    merchant: 'ZILLAR',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Kane',
      last: 'Gallegos',
      email: 'kane.gallegos@pleo.io'
    }
  },
  {
    id: '5b995dfffa1aefad04f332f7',
    amount: {
      value: '1992.91',
      currency: 'GBP'
    },
    date: '2017-01-07T15:54:40.908Z',
    merchant: 'POLARIUM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Juliet',
      last: 'Holloway',
      email: 'juliet.holloway@pleo.io'
    }
  },
  {
    id: '5b995dff0ec12c99d0601413',
    amount: {
      value: '2212.8',
      currency: 'GBP'
    },
    date: '2017-08-26T15:33:39.268Z',
    merchant: 'MANGLO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Tracy',
      last: 'Waller',
      email: 'tracy.waller@pleo.io'
    }
  },
  {
    id: '5b995dff7497c35e6b9c92bb',
    amount: {
      value: '528.81',
      currency: 'EUR'
    },
    date: '2015-08-12T14:16:38.465Z',
    merchant: 'JUNIPOOR',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Claudine',
      last: 'Powell',
      email: 'claudine.powell@pleo.io'
    }
  },
  {
    id: '5b995dff9c0f0dfb4a88d1eb',
    amount: {
      value: '1709.05',
      currency: 'GBP'
    },
    date: '2018-01-20T13:58:32.329Z',
    merchant: 'EXOVENT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Estes',
      last: 'Brown',
      email: 'estes.brown@pleo.io'
    }
  },
  {
    id: '5b995dffb1a697b52bb733c8',
    amount: {
      value: '1671.6',
      currency: 'EUR'
    },
    date: '2015-04-30T22:41:12.145Z',
    merchant: 'COMCUBINE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Minnie',
      last: 'Ayala',
      email: 'minnie.ayala@pleo.io'
    }
  },
  {
    id: '5b995dffac46fc715d1b475c',
    amount: {
      value: '855.69',
      currency: 'GBP'
    },
    date: '2017-04-21T05:42:50.785Z',
    merchant: 'ILLUMITY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Lourdes',
      last: 'Gallagher',
      email: 'lourdes.gallagher@pleo.io'
    }
  },
  {
    id: '5b995dff1aa5d585091ca6ec',
    amount: {
      value: '1349.61',
      currency: 'DKK'
    },
    date: '2018-01-21T19:11:01.895Z',
    merchant: 'GINKLE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Sampson',
      last: 'Stephenson',
      email: 'sampson.stephenson@pleo.io'
    }
  },
  {
    id: '5b995dffc78ee574202a40fa',
    amount: {
      value: '1099.85',
      currency: 'DKK'
    },
    date: '2016-06-26T10:11:28.477Z',
    merchant: 'KANGLE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Hinton',
      last: 'Cleveland',
      email: 'hinton.cleveland@pleo.io'
    }
  },
  {
    id: '5b995dff2fbb6ea60ff6b900',
    amount: {
      value: '3164.73',
      currency: 'DKK'
    },
    date: '2015-04-04T04:08:57.928Z',
    merchant: 'CORECOM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Alexandria',
      last: 'Valencia',
      email: 'alexandria.valencia@pleo.io'
    }
  },
  {
    id: '5b995dff101b241ca970a172',
    amount: {
      value: '534.13',
      currency: 'EUR'
    },
    date: '2018-05-26T07:52:07.560Z',
    merchant: 'MULTRON',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Latoya',
      last: 'Case',
      email: 'latoya.case@pleo.io'
    }
  },
  {
    id: '5b995dff1b64a0317ee2b982',
    amount: {
      value: '3093.16',
      currency: 'GBP'
    },
    date: '2018-02-12T09:40:44.742Z',
    merchant: 'GENMOM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Virginia',
      last: 'Benjamin',
      email: 'virginia.benjamin@pleo.io'
    }
  },
  {
    id: '5b995dff0bfee053b4a64638',
    amount: {
      value: '2312.97',
      currency: 'DKK'
    },
    date: '2017-11-29T00:40:29.337Z',
    merchant: 'COGNICODE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ophelia',
      last: 'Cortez',
      email: 'ophelia.cortez@pleo.io'
    }
  },
  {
    id: '5b995dff88077169faa2aa42',
    amount: {
      value: '697.28',
      currency: 'GBP'
    },
    date: '2018-05-16T01:49:45.368Z',
    merchant: 'EXTRAGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mckenzie',
      last: 'Cervantes',
      email: 'mckenzie.cervantes@pleo.io'
    }
  },
  {
    id: '5b995dff5bc6b86420dfa882',
    amount: {
      value: '2736.02',
      currency: 'DKK'
    },
    date: '2017-01-01T00:38:45.911Z',
    merchant: 'PORTALIS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Reyna',
      last: 'Delaney',
      email: 'reyna.delaney@pleo.io'
    }
  },
  {
    id: '5b995dff3e1615ac593c95bb',
    amount: {
      value: '908.71',
      currency: 'DKK'
    },
    date: '2014-08-28T07:36:19.956Z',
    merchant: 'INSURETY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Villarreal',
      last: 'Mckinney',
      email: 'villarreal.mckinney@pleo.io'
    }
  },
  {
    id: '5b995dff39d131565c961202',
    amount: {
      value: '1827.39',
      currency: 'DKK'
    },
    date: '2014-04-11T05:26:48.836Z',
    merchant: 'COMFIRM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Harvey',
      last: 'Carlson',
      email: 'harvey.carlson@pleo.io'
    }
  },
  {
    id: '5b995dffd1b2e155600f389f',
    amount: {
      value: '2204.19',
      currency: 'GBP'
    },
    date: '2016-10-07T14:48:58.904Z',
    merchant: 'FORTEAN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mays',
      last: 'Sparks',
      email: 'mays.sparks@pleo.io'
    }
  },
  {
    id: '5b995dff4d8055dcf356f8c1',
    amount: {
      value: '1802.76',
      currency: 'EUR'
    },
    date: '2016-12-08T03:18:34.821Z',
    merchant: 'CANDECOR',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Hicks',
      last: 'Murphy',
      email: 'hicks.murphy@pleo.io'
    }
  },
  {
    id: '5b995dff2a7712e24e0e9bf2',
    amount: {
      value: '3993.94',
      currency: 'GBP'
    },
    date: '2014-01-20T13:32:50.522Z',
    merchant: 'PHEAST',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Caldwell',
      last: 'Evans',
      email: 'caldwell.evans@pleo.io'
    }
  },
  {
    id: '5b995dffe67596fc9ccfe9d1',
    amount: {
      value: '915.18',
      currency: 'EUR'
    },
    date: '2016-12-18T11:47:08.943Z',
    merchant: 'MEDESIGN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Schwartz',
      last: 'Gentry',
      email: 'schwartz.gentry@pleo.io'
    }
  },
  {
    id: '5b995dff74d5c12e797bf6ff',
    amount: {
      value: '2182.26',
      currency: 'DKK'
    },
    date: '2014-11-21T19:56:05.315Z',
    merchant: 'BIOLIVE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Chris',
      last: 'Pugh',
      email: 'chris.pugh@pleo.io'
    }
  },
  {
    id: '5b995dffab3173cfef973321',
    amount: {
      value: '1217.01',
      currency: 'DKK'
    },
    date: '2016-02-11T16:59:59.597Z',
    merchant: 'SULTRAXIN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bernadine',
      last: 'Rodriguez',
      email: 'bernadine.rodriguez@pleo.io'
    }
  },
  {
    id: '5b995dffff7d85c7bc7d00d0',
    amount: {
      value: '3721.65',
      currency: 'GBP'
    },
    date: '2016-10-10T18:42:05.035Z',
    merchant: 'GEEKFARM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Peterson',
      last: 'Ashley',
      email: 'peterson.ashley@pleo.io'
    }
  },
  {
    id: '5b995dff2840aaad67864b54',
    amount: {
      value: '2796.12',
      currency: 'EUR'
    },
    date: '2015-09-02T05:16:19.547Z',
    merchant: 'HYPLEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Justine',
      last: 'Arnold',
      email: 'justine.arnold@pleo.io'
    }
  },
  {
    id: '5b995dff57d14443f09d6eb2',
    amount: {
      value: '2828.01',
      currency: 'DKK'
    },
    date: '2016-12-30T17:18:26.228Z',
    merchant: 'TRANSLINK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Beth',
      last: 'Landry',
      email: 'beth.landry@pleo.io'
    }
  },
  {
    id: '5b995dff74b94940dd48f706',
    amount: {
      value: '1830.72',
      currency: 'EUR'
    },
    date: '2018-02-04T03:47:31.125Z',
    merchant: 'URBANSHEE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Pate',
      last: 'Cruz',
      email: 'pate.cruz@pleo.io'
    }
  },
  {
    id: '5b995dfff954ed909133b14c',
    amount: {
      value: '1825.37',
      currency: 'EUR'
    },
    date: '2014-12-14T14:01:42.112Z',
    merchant: 'ENERSAVE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mercedes',
      last: 'Simon',
      email: 'mercedes.simon@pleo.io'
    }
  },
  {
    id: '5b995dff76d51d211c4b3192',
    amount: {
      value: '452.34',
      currency: 'EUR'
    },
    date: '2017-11-13T15:02:07.329Z',
    merchant: 'ORBIN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Angelina',
      last: 'Logan',
      email: 'angelina.logan@pleo.io'
    }
  },
  {
    id: '5b995dff30420221c7ce2d11',
    amount: {
      value: '3668.15',
      currency: 'EUR'
    },
    date: '2014-09-08T09:12:38.691Z',
    merchant: 'DIGIGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Randi',
      last: 'Peck',
      email: 'randi.peck@pleo.io'
    }
  },
  {
    id: '5b995dffc7ae9623559f0bad',
    amount: {
      value: '3415.36',
      currency: 'GBP'
    },
    date: '2015-04-07T12:26:15.285Z',
    merchant: 'QABOOS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Willis',
      last: 'Davenport',
      email: 'willis.davenport@pleo.io'
    }
  },
  {
    id: '5b995dff6d8977370559526a',
    amount: {
      value: '454.42',
      currency: 'GBP'
    },
    date: '2016-07-23T06:52:03.420Z',
    merchant: 'ENAUT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Aurelia',
      last: 'Mercer',
      email: 'aurelia.mercer@pleo.io'
    }
  },
  {
    id: '5b995dffec9cbbc82a7320aa',
    amount: {
      value: '3213.01',
      currency: 'DKK'
    },
    date: '2017-02-26T16:56:25.194Z',
    merchant: 'OPTICALL',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Harrison',
      last: 'Crawford',
      email: 'harrison.crawford@pleo.io'
    }
  },
  {
    id: '5b995dff92941bc708a31fae',
    amount: {
      value: '81.7',
      currency: 'DKK'
    },
    date: '2017-02-10T04:55:47.858Z',
    merchant: 'FURNAFIX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Kelsey',
      last: 'Christensen',
      email: 'kelsey.christensen@pleo.io'
    }
  },
  {
    id: '5b995dff0c8cfe07d38da664',
    amount: {
      value: '2744.58',
      currency: 'DKK'
    },
    date: '2016-12-26T15:51:43.997Z',
    merchant: 'ZYTRAC',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Janine',
      last: 'Terrell',
      email: 'janine.terrell@pleo.io'
    }
  },
  {
    id: '5b995dffd9b42bc624992100',
    amount: {
      value: '374.94',
      currency: 'DKK'
    },
    date: '2015-11-28T17:45:36.125Z',
    merchant: 'ISOSTREAM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Tucker',
      last: 'Townsend',
      email: 'tucker.townsend@pleo.io'
    }
  },
  {
    id: '5b995dffefc53f54abc9a565',
    amount: {
      value: '3281.83',
      currency: 'EUR'
    },
    date: '2014-10-29T02:59:39.775Z',
    merchant: 'TROPOLIS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Savannah',
      last: 'Barron',
      email: 'savannah.barron@pleo.io'
    }
  },
  {
    id: '5b995dffb2ba0d06a3c53f16',
    amount: {
      value: '3520.73',
      currency: 'GBP'
    },
    date: '2018-05-12T06:51:42.896Z',
    merchant: 'SCHOOLIO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Wheeler',
      last: 'Noel',
      email: 'wheeler.noel@pleo.io'
    }
  },
  {
    id: '5b995dffb8dd77344791ab46',
    amount: {
      value: '1971.15',
      currency: 'EUR'
    },
    date: '2014-03-11T03:31:08.945Z',
    merchant: 'INVENTURE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bauer',
      last: 'Clark',
      email: 'bauer.clark@pleo.io'
    }
  },
  {
    id: '5b995dff47e5e1ab9c27bc29',
    amount: {
      value: '971',
      currency: 'EUR'
    },
    date: '2014-04-01T20:42:58.429Z',
    merchant: 'RADIANTIX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Sabrina',
      last: 'Stanton',
      email: 'sabrina.stanton@pleo.io'
    }
  },
  {
    id: '5b995dff0271fe23be07e42e',
    amount: {
      value: '2473.44',
      currency: 'GBP'
    },
    date: '2015-03-18T10:31:04.574Z',
    merchant: 'OLYMPIX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Kemp',
      last: 'Ramos',
      email: 'kemp.ramos@pleo.io'
    }
  },
  {
    id: '5b995dff135ac1b89e98a4d9',
    amount: {
      value: '2950.74',
      currency: 'DKK'
    },
    date: '2014-04-03T15:58:20.355Z',
    merchant: 'NORSUP',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mccray',
      last: 'Thomas',
      email: 'mccray.thomas@pleo.io'
    }
  },
  {
    id: '5b995dffa0864eddc16e2f76',
    amount: {
      value: '166',
      currency: 'GBP'
    },
    date: '2018-08-12T00:37:46.342Z',
    merchant: 'KONNECT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Pam',
      last: 'Noble',
      email: 'pam.noble@pleo.io'
    }
  },
  {
    id: '5b995dff6085fed110fc3968',
    amount: {
      value: '2286.58',
      currency: 'DKK'
    },
    date: '2016-07-21T08:58:12.509Z',
    merchant: 'DANJA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ericka',
      last: 'Edwards',
      email: 'ericka.edwards@pleo.io'
    }
  },
  {
    id: '5b995dff57d1febf66751b52',
    amount: {
      value: '3983.32',
      currency: 'GBP'
    },
    date: '2014-10-10T10:42:15.999Z',
    merchant: 'IZZBY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Baird',
      last: 'Galloway',
      email: 'baird.galloway@pleo.io'
    }
  },
  {
    id: '5b995dffc68bbfac60b69c77',
    amount: {
      value: '1179.51',
      currency: 'EUR'
    },
    date: '2015-02-13T13:20:37.677Z',
    merchant: 'ISOPOP',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bird',
      last: 'Stewart',
      email: 'bird.stewart@pleo.io'
    }
  },
  {
    id: '5b99606489042a07a8a1c616',
    amount: {
      value: '346.08',
      currency: 'GBP'
    },
    date: '2014-09-06T21:33:30.681Z',
    merchant: 'FANGOLD',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Zamora',
      last: 'Medina',
      email: 'zamora.medina@pleo.io'
    }
  },
  {
    id: '5b99606449859eb107ca580b',
    amount: {
      value: '1073.23',
      currency: 'DKK'
    },
    date: '2017-10-21T20:39:52.346Z',
    merchant: 'PROTODYNE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Stephanie',
      last: 'Irwin',
      email: 'stephanie.irwin@pleo.io'
    }
  },
  {
    id: '5b996064b7ef9d7f8ea8b10c',
    amount: {
      value: '1200.69',
      currency: 'EUR'
    },
    date: '2016-08-21T18:47:23.532Z',
    merchant: 'LUDAK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Harvey',
      last: 'Castillo',
      email: 'harvey.castillo@pleo.io'
    }
  },
  {
    id: '5b9960649f83b9fa9bbb8707',
    amount: {
      value: '3393.58',
      currency: 'EUR'
    },
    date: '2016-12-06T23:44:04.413Z',
    merchant: 'BESTO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Shana',
      last: 'Oliver',
      email: 'shana.oliver@pleo.io'
    }
  },
  {
    id: '5b9960649f37a3041c65877c',
    amount: {
      value: '412.03',
      currency: 'GBP'
    },
    date: '2017-05-25T07:59:38.697Z',
    merchant: 'SKYPLEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Rose',
      last: 'Fitzgerald',
      email: 'rose.fitzgerald@pleo.io'
    }
  },
  {
    id: '5b9960642ac4813bf0049122',
    amount: {
      value: '331.66',
      currency: 'GBP'
    },
    date: '2016-09-20T05:27:19.994Z',
    merchant: 'WATERBABY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Lillie',
      last: 'Emerson',
      email: 'lillie.emerson@pleo.io'
    }
  },
  {
    id: '5b996064081ecc29f27ccbd5',
    amount: {
      value: '1270.95',
      currency: 'GBP'
    },
    date: '2014-07-25T13:30:30.323Z',
    merchant: 'GENEKOM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Long',
      last: 'Fischer',
      email: 'long.fischer@pleo.io'
    }
  },
  {
    id: '5b9960642099c5f53cae31f1',
    amount: {
      value: '3447.86',
      currency: 'EUR'
    },
    date: '2017-12-29T18:28:16.097Z',
    merchant: 'EMTRAK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Imogene',
      last: 'Hartman',
      email: 'imogene.hartman@pleo.io'
    }
  },
  {
    id: '5b996064effb39030c6b8f2d',
    amount: {
      value: '2561.07',
      currency: 'EUR'
    },
    date: '2016-11-17T04:19:40.235Z',
    merchant: 'BLANET',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Nancy',
      last: 'Hammond',
      email: 'nancy.hammond@pleo.io'
    }
  },
  {
    id: '5b99606443ad0c4311f1d02d',
    amount: {
      value: '3022.16',
      currency: 'EUR'
    },
    date: '2017-08-12T18:38:14.603Z',
    merchant: 'AUSTEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Fay',
      last: 'Lucas',
      email: 'fay.lucas@pleo.io'
    }
  },
  {
    id: '5b9960647036de0eb5954db1',
    amount: {
      value: '476.98',
      currency: 'DKK'
    },
    date: '2018-04-29T03:30:46.282Z',
    merchant: 'BILLMED',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Barry',
      last: 'Gallagher',
      email: 'barry.gallagher@pleo.io'
    }
  },
  {
    id: '5b996064f5becf9df839e560',
    amount: {
      value: '3.82',
      currency: 'DKK'
    },
    date: '2018-06-25T09:34:47.477Z',
    merchant: 'MACRONAUT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Dena',
      last: 'Warren',
      email: 'dena.warren@pleo.io'
    }
  },
  {
    id: '5b996064dfd5b783915112f5',
    amount: {
      value: '1854.99',
      currency: 'EUR'
    },
    date: '2018-09-10T02:11:29.184Z',
    merchant: 'KAGE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Vickie',
      last: 'Lee',
      email: 'vickie.lee@pleo.io'
    }
  },
  {
    id: '5b9960645da95aa5750abaf7',
    amount: {
      value: '906.11',
      currency: 'DKK'
    },
    date: '2016-09-14T04:06:29.666Z',
    merchant: 'UNEEQ',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bianca',
      last: 'Wallace',
      email: 'bianca.wallace@pleo.io'
    }
  },
  {
    id: '5b9960641b2e4f27938fe595',
    amount: {
      value: '2722.97',
      currency: 'GBP'
    },
    date: '2016-06-09T13:03:01.608Z',
    merchant: 'CEMENTION',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Celia',
      last: 'Frazier',
      email: 'celia.frazier@pleo.io'
    }
  },
  {
    id: '5b996064edfe99f47c2f7d60',
    amount: {
      value: '1871.12',
      currency: 'EUR'
    },
    date: '2014-06-12T15:23:51.220Z',
    merchant: 'VITRICOMP',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Waters',
      last: 'Vinson',
      email: 'waters.vinson@pleo.io'
    }
  },
  {
    id: '5b996064fcfbecff60f617ba',
    amount: {
      value: '11.51',
      currency: 'DKK'
    },
    date: '2014-09-30T07:13:27.603Z',
    merchant: 'KLUGGER',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Kathy',
      last: 'Bush',
      email: 'kathy.bush@pleo.io'
    }
  },
  {
    id: '5b996064ba218563e3ed5935',
    amount: {
      value: '3383.76',
      currency: 'DKK'
    },
    date: '2018-03-23T08:31:02.663Z',
    merchant: 'ELEMANTRA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Frances',
      last: 'Atkins',
      email: 'frances.atkins@pleo.io'
    }
  },
  {
    id: '5b996064cadeac55736ad99a',
    amount: {
      value: '1637',
      currency: 'DKK'
    },
    date: '2018-01-16T22:15:16.209Z',
    merchant: 'BRAINCLIP',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Constance',
      last: 'Hahn',
      email: 'constance.hahn@pleo.io'
    }
  },
  {
    id: '5b9960641ddc78482ef2fdd9',
    amount: {
      value: '2760.27',
      currency: 'DKK'
    },
    date: '2016-10-07T06:34:04.760Z',
    merchant: 'XLEEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Annette',
      last: 'Mckay',
      email: 'annette.mckay@pleo.io'
    }
  },
  {
    id: '5b9960642bcea5a5428e01ad',
    amount: {
      value: '3476.9',
      currency: 'DKK'
    },
    date: '2017-10-27T19:42:53.734Z',
    merchant: 'EXOSTREAM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Tamera',
      last: 'Perkins',
      email: 'tamera.perkins@pleo.io'
    }
  },
  {
    id: '5b99606406570f80d5e81473',
    amount: {
      value: '486.33',
      currency: 'GBP'
    },
    date: '2015-02-28T06:03:13.494Z',
    merchant: 'PREMIANT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Jewell',
      last: 'Delacruz',
      email: 'jewell.delacruz@pleo.io'
    }
  },
  {
    id: '5b9960644d90766330ed031a',
    amount: {
      value: '3710.59',
      currency: 'DKK'
    },
    date: '2014-06-24T10:32:05.799Z',
    merchant: 'GRAINSPOT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Burris',
      last: 'Reyes',
      email: 'burris.reyes@pleo.io'
    }
  },
  {
    id: '5b99606494b58c2188350cc5',
    amount: {
      value: '1419.27',
      currency: 'EUR'
    },
    date: '2017-01-25T20:31:03.315Z',
    merchant: 'NITRACYR',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Lynette',
      last: 'Bean',
      email: 'lynette.bean@pleo.io'
    }
  },
  {
    id: '5b996064f088a7ce968c82a0',
    amount: {
      value: '2721.37',
      currency: 'GBP'
    },
    date: '2014-12-01T07:26:56.320Z',
    merchant: 'ZILLA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ava',
      last: 'Chandler',
      email: 'ava.chandler@pleo.io'
    }
  },
  {
    id: '5b9960640ff5db6027b45da4',
    amount: {
      value: '1366.77',
      currency: 'DKK'
    },
    date: '2015-03-20T16:40:40.322Z',
    merchant: 'OCEANICA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Hopkins',
      last: 'Best',
      email: 'hopkins.best@pleo.io'
    }
  },
  {
    id: '5b996064fa987dbc5f61baae',
    amount: {
      value: '1903.15',
      currency: 'DKK'
    },
    date: '2016-07-13T22:57:00.908Z',
    merchant: 'ZANYMAX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Harrison',
      last: 'Mejia',
      email: 'harrison.mejia@pleo.io'
    }
  },
  {
    id: '5b996064916599604568aab3',
    amount: {
      value: '1522.25',
      currency: 'DKK'
    },
    date: '2014-12-15T04:21:05.935Z',
    merchant: 'APPLIDECK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bennett',
      last: 'Mercer',
      email: 'bennett.mercer@pleo.io'
    }
  },
  {
    id: '5b9960642afed51d57d23b3d',
    amount: {
      value: '3414.94',
      currency: 'EUR'
    },
    date: '2016-04-11T17:06:55.219Z',
    merchant: 'ESCENTA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Shannon',
      last: 'Bradford',
      email: 'shannon.bradford@pleo.io'
    }
  },
  {
    id: '5b996064c21075e01e9dd5f9',
    amount: {
      value: '3533.92',
      currency: 'GBP'
    },
    date: '2016-03-17T08:40:04.731Z',
    merchant: 'ENTALITY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Peggy',
      last: 'Sawyer',
      email: 'peggy.sawyer@pleo.io'
    }
  },
  {
    id: '5b99606441d972184bc67343',
    amount: {
      value: '3731.33',
      currency: 'EUR'
    },
    date: '2016-10-02T04:25:02.732Z',
    merchant: 'QUIZMO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Florence',
      last: 'Lane',
      email: 'florence.lane@pleo.io'
    }
  },
  {
    id: '5b996064aa59333e5bdd82fa',
    amount: {
      value: '1480.57',
      currency: 'DKK'
    },
    date: '2015-02-06T20:53:59.580Z',
    merchant: 'ZAPHIRE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Laurie',
      last: 'Morton',
      email: 'laurie.morton@pleo.io'
    }
  },
  {
    id: '5b9960646ed57c7140aa0622',
    amount: {
      value: '856.8',
      currency: 'EUR'
    },
    date: '2015-06-18T04:58:54.185Z',
    merchant: 'DIGIQUE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Solis',
      last: 'Rush',
      email: 'solis.rush@pleo.io'
    }
  },
  {
    id: '5b9960647dc5d879ec9b617b',
    amount: {
      value: '3142.09',
      currency: 'DKK'
    },
    date: '2017-11-07T13:35:37.130Z',
    merchant: 'ILLUMITY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Matilda',
      last: 'Becker',
      email: 'matilda.becker@pleo.io'
    }
  },
  {
    id: '5b996064763c1f8a580098ad',
    amount: {
      value: '3113.96',
      currency: 'DKK'
    },
    date: '2015-01-16T02:49:30.529Z',
    merchant: 'EXIAND',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'York',
      last: 'Mcfadden',
      email: 'york.mcfadden@pleo.io'
    }
  },
  {
    id: '5b9960640d134ccab9d1967e',
    amount: {
      value: '3603.74',
      currency: 'DKK'
    },
    date: '2015-11-09T17:15:05.094Z',
    merchant: 'STRALOY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ray',
      last: 'Townsend',
      email: 'ray.townsend@pleo.io'
    }
  },
  {
    id: '5b996064d962a6a7185f5eee',
    amount: {
      value: '3708.14',
      currency: 'GBP'
    },
    date: '2015-05-24T20:51:39.368Z',
    merchant: 'CENTREXIN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Miranda',
      last: 'Obrien',
      email: 'miranda.obrien@pleo.io'
    }
  },
  {
    id: '5b996064c1202952ee98dc28',
    amount: {
      value: '3169.39',
      currency: 'EUR'
    },
    date: '2017-04-29T13:47:52.978Z',
    merchant: 'ZEDALIS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Etta',
      last: 'Black',
      email: 'etta.black@pleo.io'
    }
  },
  {
    id: '5b996064934358942b0c9e5d',
    amount: {
      value: '2237.45',
      currency: 'EUR'
    },
    date: '2014-07-23T00:39:39.190Z',
    merchant: 'EARWAX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Elisa',
      last: 'Banks',
      email: 'elisa.banks@pleo.io'
    }
  },
  {
    id: '5b996064f6b32e425d11a63e',
    amount: {
      value: '2245.18',
      currency: 'GBP'
    },
    date: '2014-12-10T12:40:14.568Z',
    merchant: 'ICOLOGY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Glenn',
      last: 'Hobbs',
      email: 'glenn.hobbs@pleo.io'
    }
  },
  {
    id: '5b9960644c869161c9a3da24',
    amount: {
      value: '3509.02',
      currency: 'EUR'
    },
    date: '2016-06-17T18:54:09.352Z',
    merchant: 'WARETEL',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Bobbie',
      last: 'Bird',
      email: 'bobbie.bird@pleo.io'
    }
  },
  {
    id: '5b99606422ad258d23e80b33',
    amount: {
      value: '3092.27',
      currency: 'GBP'
    },
    date: '2017-10-15T23:42:24.772Z',
    merchant: 'COMBOGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ross',
      last: 'Drake',
      email: 'ross.drake@pleo.io'
    }
  },
  {
    id: '5b996064576e4156bd93bdfb',
    amount: {
      value: '1824.98',
      currency: 'EUR'
    },
    date: '2014-01-08T02:34:44.551Z',
    merchant: 'ISOPLEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Ada',
      last: 'Koch',
      email: 'ada.koch@pleo.io'
    }
  },
  {
    id: '5b9960644534733913d4bae6',
    amount: {
      value: '2954.36',
      currency: 'EUR'
    },
    date: '2015-09-07T00:31:28.993Z',
    merchant: 'ACCUFARM',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Pat',
      last: 'Avery',
      email: 'pat.avery@pleo.io'
    }
  },
  {
    id: '5b99606492951fe4481be7c6',
    amount: {
      value: '2069.83',
      currency: 'EUR'
    },
    date: '2018-02-22T16:25:40.540Z',
    merchant: 'EMERGENT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Christensen',
      last: 'Trevino',
      email: 'christensen.trevino@pleo.io'
    }
  },
  {
    id: '5b996064bdf2d533e45a8cf4',
    amount: {
      value: '961.51',
      currency: 'DKK'
    },
    date: '2017-11-06T09:10:02.038Z',
    merchant: 'PHARMEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Blanchard',
      last: 'Miles',
      email: 'blanchard.miles@pleo.io'
    }
  },
  {
    id: '5b9960647eb83b6e4179936d',
    amount: {
      value: '3960.71',
      currency: 'GBP'
    },
    date: '2018-01-14T12:04:38.077Z',
    merchant: 'HOUSEDOWN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Marie',
      last: 'Olsen',
      email: 'marie.olsen@pleo.io'
    }
  },
  {
    id: '5b99606424943baa66041822',
    amount: {
      value: '3419.77',
      currency: 'EUR'
    },
    date: '2015-07-09T11:12:12.614Z',
    merchant: 'PATHWAYS',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Maura',
      last: 'Hardy',
      email: 'maura.hardy@pleo.io'
    }
  },
  {
    id: '5b996064a33a35175c25fea5',
    amount: {
      value: '1927.1',
      currency: 'DKK'
    },
    date: '2017-05-26T05:28:05.020Z',
    merchant: 'UPDAT',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Garza',
      last: 'Blake',
      email: 'garza.blake@pleo.io'
    }
  },
  {
    id: '5b99606429303f3d9656790e',
    amount: {
      value: '1675.47',
      currency: 'DKK'
    },
    date: '2016-11-14T05:52:18.433Z',
    merchant: 'XYQAG',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Huffman',
      last: 'Holman',
      email: 'huffman.holman@pleo.io'
    }
  },
  {
    id: '5b99606409b6b68374e3cf34',
    amount: {
      value: '945.45',
      currency: 'DKK'
    },
    date: '2015-01-11T15:10:10.911Z',
    merchant: 'NAMEGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Inez',
      last: 'Harris',
      email: 'inez.harris@pleo.io'
    }
  },
  {
    id: '5b9960646e91c4a486522c1d',
    amount: {
      value: '1012.11',
      currency: 'EUR'
    },
    date: '2015-01-09T22:15:03.570Z',
    merchant: 'GOKO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Burgess',
      last: 'Bryant',
      email: 'burgess.bryant@pleo.io'
    }
  },
  {
    id: '5b9960644a9d0f115f6dc645',
    amount: {
      value: '2712.41',
      currency: 'EUR'
    },
    date: '2014-08-09T01:53:49.152Z',
    merchant: 'STROZEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Murphy',
      last: 'Peterson',
      email: 'murphy.peterson@pleo.io'
    }
  },
  {
    id: '5b996064a33cd79a446d43e1',
    amount: {
      value: '3990.09',
      currency: 'EUR'
    },
    date: '2018-01-07T22:01:55.002Z',
    merchant: 'MEDMEX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Carr',
      last: 'Haney',
      email: 'carr.haney@pleo.io'
    }
  },
  {
    id: '5b996064e5c16e3951295d1f',
    amount: {
      value: '2709.65',
      currency: 'EUR'
    },
    date: '2018-04-16T03:26:43.651Z',
    merchant: 'AQUAFIRE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Robin',
      last: 'Rios',
      email: 'robin.rios@pleo.io'
    }
  },
  {
    id: '5b9960640cb5f68cf0ad5a15',
    amount: {
      value: '2332.17',
      currency: 'EUR'
    },
    date: '2015-12-13T16:45:32.219Z',
    merchant: 'MARTGO',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Kelli',
      last: 'Kerr',
      email: 'kelli.kerr@pleo.io'
    }
  },
  {
    id: '5b99606455fd0dc1e8ddffff',
    amount: {
      value: '2013.21',
      currency: 'DKK'
    },
    date: '2017-08-09T23:47:08.120Z',
    merchant: 'HANDSHAKE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Camacho',
      last: 'Delaney',
      email: 'camacho.delaney@pleo.io'
    }
  },
  {
    id: '5b99606473fb83d3a01730e8',
    amount: {
      value: '2634.8',
      currency: 'EUR'
    },
    date: '2014-01-28T01:05:51.811Z',
    merchant: 'UNISURE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Coffey',
      last: 'Garcia',
      email: 'coffey.garcia@pleo.io'
    }
  },
  {
    id: '5b996064ec1922a0ef41c447',
    amount: {
      value: '1674.92',
      currency: 'DKK'
    },
    date: '2017-07-26T05:01:14.427Z',
    merchant: 'KANGLE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Avila',
      last: 'Skinner',
      email: 'avila.skinner@pleo.io'
    }
  },
  {
    id: '5b9960645f633cb0f4661641',
    amount: {
      value: '3157.33',
      currency: 'EUR'
    },
    date: '2015-08-24T21:39:19.507Z',
    merchant: 'VELITY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Martha',
      last: 'Mills',
      email: 'martha.mills@pleo.io'
    }
  },
  {
    id: '5b9960640a0189fda5f689c0',
    amount: {
      value: '3965.19',
      currency: 'GBP'
    },
    date: '2018-03-22T15:33:09.360Z',
    merchant: 'CIPROMOX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mona',
      last: 'Freeman',
      email: 'mona.freeman@pleo.io'
    }
  },
  {
    id: '5b996064513e849db6e4b47e',
    amount: {
      value: '1691.54',
      currency: 'DKK'
    },
    date: '2016-08-09T08:58:53.634Z',
    merchant: 'INQUALA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mamie',
      last: 'Christensen',
      email: 'mamie.christensen@pleo.io'
    }
  },
  {
    id: '5b9960645ee96a3f04e30c31',
    amount: {
      value: '128.5',
      currency: 'GBP'
    },
    date: '2017-06-01T01:22:24.225Z',
    merchant: 'TERRAGEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Rebekah',
      last: 'Cross',
      email: 'rebekah.cross@pleo.io'
    }
  },
  {
    id: '5b99606474ab17b7820b3922',
    amount: {
      value: '3222.88',
      currency: 'GBP'
    },
    date: '2018-08-13T07:11:01.680Z',
    merchant: 'ASSITIA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Lowe',
      last: 'Michael',
      email: 'lowe.michael@pleo.io'
    }
  },
  {
    id: '5b99606419cc4b0bb52d7665',
    amount: {
      value: '1495.94',
      currency: 'GBP'
    },
    date: '2018-06-17T06:20:18.194Z',
    merchant: 'SURELOGIC',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Walsh',
      last: 'Hudson',
      email: 'walsh.hudson@pleo.io'
    }
  },
  {
    id: '5b9960643a6965eb05e0b1f9',
    amount: {
      value: '2099.99',
      currency: 'DKK'
    },
    date: '2014-01-19T07:15:54.389Z',
    merchant: 'BUZZOPIA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Richmond',
      last: 'Sellers',
      email: 'richmond.sellers@pleo.io'
    }
  },
  {
    id: '5b996064dc44df67c291556f',
    amount: {
      value: '3585.22',
      currency: 'DKK'
    },
    date: '2014-11-06T17:43:59.554Z',
    merchant: 'INTERGEEK',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'West',
      last: 'Knowles',
      email: 'west.knowles@pleo.io'
    }
  },
  {
    id: '5b9960641332c1c2d10f3a25',
    amount: {
      value: '1242.09',
      currency: 'DKK'
    },
    date: '2015-02-25T16:33:29.135Z',
    merchant: 'ZYPLE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mable',
      last: 'White',
      email: 'mable.white@pleo.io'
    }
  },
  {
    id: '5b996064394da2b1c7c4a872',
    amount: {
      value: '1035.92',
      currency: 'EUR'
    },
    date: '2015-08-06T22:54:04.486Z',
    merchant: 'QUIZKA',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Georgette',
      last: 'Marquez',
      email: 'georgette.marquez@pleo.io'
    }
  },
  {
    id: '5b996064b836e2362d231ddd',
    amount: {
      value: '1128.16',
      currency: 'EUR'
    },
    date: '2014-04-11T03:18:47.602Z',
    merchant: 'MANTRIX',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Anita',
      last: 'Yang',
      email: 'anita.yang@pleo.io'
    }
  },
  {
    id: '5b9960648226c9e124eaeec7',
    amount: {
      value: '3957.97',
      currency: 'GBP'
    },
    date: '2015-05-09T05:01:08.179Z',
    merchant: 'SCENTY',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Sanchez',
      last: 'Downs',
      email: 'sanchez.downs@pleo.io'
    }
  },
  {
    id: '5b99606419de4bdda4d77372',
    amount: {
      value: '3293.15',
      currency: 'DKK'
    },
    date: '2016-10-14T04:25:28.117Z',
    merchant: 'ENOMEN',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Palmer',
      last: 'Howard',
      email: 'palmer.howard@pleo.io'
    }
  },
  {
    id: '5b9960643a396ae62ae89b02',
    amount: {
      value: '1247.4',
      currency: 'DKK'
    },
    date: '2015-12-02T14:47:19.618Z',
    merchant: 'MAGNAFONE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Mccormick',
      last: 'Barber',
      email: 'mccormick.barber@pleo.io'
    }
  },
  {
    id: '5b996064c78d7194a2e7239e',
    amount: {
      value: '3620.98',
      currency: 'GBP'
    },
    date: '2018-05-05T14:00:00.439Z',
    merchant: 'XINWARE',
    receipts: [],
    comment: '',
    category: '',
    user: {
      first: 'Flynn',
      last: 'Giles',
      email: 'flynn.giles@pleo.io'
    }
  }
]
