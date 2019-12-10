const weatherData = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1575968400,
      main: {
        temp: 4.51,
        temp_min: 2.85,
        temp_max: 4.51,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 981,
        humidity: 94,
        temp_kf: 1.66,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 3.76,
        deg: 218,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-10 09:00:00',
    },
    {
      dt: 1575979200,
      main: {
        temp: 4.59,
        temp_min: 3.34,
        temp_max: 4.59,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 982,
        humidity: 88,
        temp_kf: 1.25,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 3.6,
        deg: 238,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-10 12:00:00',
    },
    {
      dt: 1575990000,
      main: {
        temp: 3.44,
        temp_min: 2.61,
        temp_max: 3.44,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 983,
        humidity: 93,
        temp_kf: 0.83,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 2.89,
        deg: 241,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-10 15:00:00',
    },
    {
      dt: 1576000800,
      main: {
        temp: 1.61,
        temp_min: 1.19,
        temp_max: 1.61,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 985,
        humidity: 94,
        temp_kf: 0.42,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 3.75,
        deg: 251,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-10 18:00:00',
    },
    {
      dt: 1576011600,
      main: {
        temp: 1.37,
        temp_min: 1.37,
        temp_max: 1.37,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 986,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.67,
        deg: 251,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-10 21:00:00',
    },
    {
      dt: 1576022400,
      main: {
        temp: 0.79,
        temp_min: 0.79,
        temp_max: 0.79,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 988,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.5,
        deg: 278,
      },
      snow: {
        '3h': 0.13,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-11 00:00:00',
    },
    {
      dt: 1576033200,
      main: {
        temp: 0.61,
        temp_min: 0.61,
        temp_max: 0.61,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 988,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.15,
        deg: 312,
      },
      snow: {
        '3h': 0.13,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-11 03:00:00',
    },
    {
      dt: 1576044000,
      main: {
        temp: 0.3,
        temp_min: 0.3,
        temp_max: 0.3,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 990,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.06,
        deg: 355,
      },
      snow: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-11 06:00:00',
    },
    {
      dt: 1576054800,
      main: {
        temp: 0.65,
        temp_min: 0.65,
        temp_max: 0.65,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 990,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 1,
        deg: 56,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-11 09:00:00',
    },
    {
      dt: 1576065600,
      main: {
        temp: 1.02,
        temp_min: 1.02,
        temp_max: 1.02,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 990,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 1.59,
        deg: 133,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-11 12:00:00',
    },
    {
      dt: 1576076400,
      main: {
        temp: -0.75,
        temp_min: -0.75,
        temp_max: -0.75,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 989,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 48,
      },
      wind: {
        speed: 2.33,
        deg: 138,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-11 15:00:00',
    },
    {
      dt: 1576087200,
      main: {
        temp: -0.29,
        temp_min: -0.29,
        temp_max: -0.29,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 989,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 3.37,
        deg: 146,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-11 18:00:00',
    },
    {
      dt: 1576098000,
      main: {
        temp: -0.28,
        temp_min: -0.28,
        temp_max: -0.28,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 989,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.15,
        deg: 151,
      },
      snow: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-11 21:00:00',
    },
    {
      dt: 1576108800,
      main: {
        temp: -1.29,
        temp_min: -1.29,
        temp_max: -1.29,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 988,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 3.85,
        deg: 150,
      },
      snow: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-12 00:00:00',
    },
    {
      dt: 1576119600,
      main: {
        temp: -1.36,
        temp_min: -1.36,
        temp_max: -1.36,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 986,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.31,
        deg: 132,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-12 03:00:00',
    },
    {
      dt: 1576130400,
      main: {
        temp: 0.75,
        temp_min: 0.75,
        temp_max: 0.75,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 984,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 5.04,
        deg: 132,
      },
      snow: {
        '3h': 1.19,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-12 06:00:00',
    },
    {
      dt: 1576141200,
      main: {
        temp: 2.31,
        temp_min: 2.31,
        temp_max: 2.31,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 983,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.12,
        deg: 172,
      },
      rain: {
        '3h': 1.25,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-12 09:00:00',
    },
    {
      dt: 1576152000,
      main: {
        temp: 3.43,
        temp_min: 3.43,
        temp_max: 3.43,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 982,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.84,
        deg: 179,
      },
      rain: {
        '3h': 0.5,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-12 12:00:00',
    },
    {
      dt: 1576162800,
      main: {
        temp: 3.1,
        temp_min: 3.1,
        temp_max: 3.1,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 982,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.94,
        deg: 170,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-12 15:00:00',
    },
    {
      dt: 1576173600,
      main: {
        temp: 2.05,
        temp_min: 2.05,
        temp_max: 2.05,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 982,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.04,
        deg: 159,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-12 18:00:00',
    },
    {
      dt: 1576184400,
      main: {
        temp: 1.64,
        temp_min: 1.64,
        temp_max: 1.64,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 981,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 89,
      },
      wind: {
        speed: 6.37,
        deg: 159,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-12 21:00:00',
    },
    {
      dt: 1576195200,
      main: {
        temp: 1.67,
        temp_min: 1.67,
        temp_max: 1.67,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 980,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 7.21,
        deg: 161,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-13 00:00:00',
    },
    {
      dt: 1576206000,
      main: {
        temp: 2.07,
        temp_min: 2.07,
        temp_max: 2.07,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 977,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.46,
        deg: 154,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-13 03:00:00',
    },
    {
      dt: 1576216800,
      main: {
        temp: 2.15,
        temp_min: 2.15,
        temp_max: 2.15,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 976,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.52,
        deg: 151,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-13 06:00:00',
    },
    {
      dt: 1576227600,
      main: {
        temp: 1.41,
        temp_min: 1.41,
        temp_max: 1.41,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 976,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.28,
        deg: 155,
      },
      snow: {
        '3h': 0.19,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-13 09:00:00',
    },
    {
      dt: 1576238400,
      main: {
        temp: 1.09,
        temp_min: 1.09,
        temp_max: 1.09,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 976,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.64,
        deg: 155,
      },
      snow: {
        '3h': 0.06,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-13 12:00:00',
    },
    {
      dt: 1576249200,
      main: {
        temp: 0.75,
        temp_min: 0.75,
        temp_max: 0.75,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 975,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.29,
        deg: 150,
      },
      snow: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-13 15:00:00',
    },
    {
      dt: 1576260000,
      main: {
        temp: 1.27,
        temp_min: 1.27,
        temp_max: 1.27,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 975,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.46,
        deg: 152,
      },
      snow: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-13 18:00:00',
    },
    {
      dt: 1576270800,
      main: {
        temp: 0.92,
        temp_min: 0.92,
        temp_max: 0.92,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 976,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.04,
        deg: 155,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-13 21:00:00',
    },
    {
      dt: 1576281600,
      main: {
        temp: 0.9,
        temp_min: 0.9,
        temp_max: 0.9,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 976,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.81,
        deg: 149,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-14 00:00:00',
    },
    {
      dt: 1576292400,
      main: {
        temp: 0.77,
        temp_min: 0.77,
        temp_max: 0.77,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 975,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.86,
        deg: 151,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-14 03:00:00',
    },
    {
      dt: 1576303200,
      main: {
        temp: 1.2,
        temp_min: 1.2,
        temp_max: 1.2,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 976,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.71,
        deg: 157,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-14 06:00:00',
    },
    {
      dt: 1576314000,
      main: {
        temp: 1.59,
        temp_min: 1.59,
        temp_max: 1.59,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 977,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.37,
        deg: 167,
      },
      snow: {
        '3h': 0.13,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-14 09:00:00',
    },
    {
      dt: 1576324800,
      main: {
        temp: 1.98,
        temp_min: 1.98,
        temp_max: 1.98,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 975,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.98,
        deg: 150,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2019-12-14 12:00:00',
    },
    {
      dt: 1576335600,
      main: {
        temp: 2.3,
        temp_min: 2.3,
        temp_max: 2.3,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 974,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.94,
        deg: 160,
      },
      rain: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-14 15:00:00',
    },
    {
      dt: 1576346400,
      main: {
        temp: 2.89,
        temp_min: 2.89,
        temp_max: 2.89,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 973,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.6,
        deg: 164,
      },
      rain: {
        '3h': 0.06,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-14 18:00:00',
    },
    {
      dt: 1576357200,
      main: {
        temp: 3.91,
        temp_min: 3.91,
        temp_max: 3.91,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 971,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.37,
        deg: 165,
      },
      rain: {
        '3h': 0.63,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-14 21:00:00',
    },
    {
      dt: 1576368000,
      main: {
        temp: 5.34,
        temp_min: 5.34,
        temp_max: 5.34,
        pressure: 999,
        sea_level: 999,
        grnd_level: 970,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.33,
        deg: 200,
      },
      rain: {
        '3h': 1.94,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-15 00:00:00',
    },
    {
      dt: 1576378800,
      main: {
        temp: 3.39,
        temp_min: 3.39,
        temp_max: 3.39,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 971,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 6.22,
        deg: 209,
      },
      rain: {
        '3h': 0.19,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-15 03:00:00',
    },
    {
      dt: 1576389600,
      main: {
        temp: 2.42,
        temp_min: 2.42,
        temp_max: 2.42,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 971,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 79,
      },
      wind: {
        speed: 6.51,
        deg: 212,
      },
      rain: {
        '3h': 0.44,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2019-12-15 06:00:00',
    },
  ],
  city: {
    id: 625144,
    name: 'Minsk',
    coord: {
      lat: 53.9023,
      lon: 27.5619,
    },
    country: 'BY',
    population: 1742124,
    timezone: 10800,
    sunrise: 1575958589,
    sunset: 1575985708,
  },
};

export default weatherData;
