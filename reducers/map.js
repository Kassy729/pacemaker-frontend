import shortid from "shortid";
import produce from "immer";
import faker from "faker";

export const initialStates = {
  searchMap: [
    {
      id: 1,
      name: "복현동~글로벌캠퍼스",
      distance: 350,
      userId: shortid.generate(),
      description: "설명",
      event: "bike",
      gps: {
        type: "LineString",
        coordinates: [
          [128.59416742212568, 35.8713789931692],
          [128.59179748777026, 35.868929415096176],
          [128.59179748777026, 35.871731726174204],
          [128.59486872923083, 35.87337779276796],
          [128.59900402285095, 35.87467110681479],
          [128.59600533040128, 35.872652743839645],
        ],
        id: "62133c5ff58346f2e09756af",
      },
      altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
      ],
      start_latlng: [128.59416742212568, 35.8713789931692],
      end_latlng: [128.59600533040128, 35.872652743839645],
      createdAt: "2022-02-21T07:16:47.648Z",
    },
    {
      id: 2,
      name: "경북대학교",
      distance: 350,
      userId: shortid.generate(),
      description: "설명",
      event: "bike",
      gps: {
        type: "LineString",
        coordinates: [
          [128.6107980854627, 35.892532678390346],
          [128.6068460393017, 35.88766339206395],
          [128.61174492985546, 35.88602911241712],
          [128.6145031287387, 35.88856389908935],
          [128.6123212699206, 35.89099855199497],
          [128.6128976099858, 35.89463371630573],
        ],
        id: "62133c5ff58346f2e09756af",
      },
      altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
      ],
      start_latlng: [128.6107980854627, 35.892532678390346],
      end_latlng: [128.6128976099858, 35.89463371630573],
      createdAt: "2022-02-21T07:16:47.648Z",
    },
    {
      id: 3,
      name: "두류공원~동성로",
      distance: 350,
      userId: shortid.generate(),
      description: "설명",
      event: "running",
      gps: {
        type: "LineString",
        coordinates: [
          [128.61568699047842, 35.89783218289432],
          [128.61388454612188, 35.89831887973966],
          [128.6200643553443, 35.89567677518036],
          [128.62714538674498, 35.89696307394185],
          [128.62555751909755, 35.892443553570914],
          [128.62933406917793, 35.89421662693352],
        ],
        id: "62133c5ff58346f2e09756af",
      },
      altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
      ],
      start_latlng: [128.62933406917793, 35.89421662693352],
      end_latlng: [128.61568699047842, 35.89783218289432],
      createdAt: "2022-02-21T07:16:47.648Z",
    },
    {
      id: 1,
      name: "복현동~글로벌캠퍼스",
      distance: 350,
      userId: shortid.generate(),
      description: "설명",
      event: "bike",
      gps: {
        type: "LineString",
        coordinates: [
          [128.59416742212568, 35.8713789931692],
          [128.59179748777026, 35.868929415096176],
          [128.59179748777026, 35.871731726174204],
          [128.59486872923083, 35.87337779276796],
          [128.59900402285095, 35.87467110681479],
          [128.59600533040128, 35.872652743839645],
        ],
        id: "62133c5ff58346f2e09756af",
      },
      altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
      ],
      start_latlng: [128.59416742212568, 35.8713789931692],
      end_latlng: [128.59600533040128, 35.872652743839645],
      createdAt: "2022-02-21T07:16:47.648Z",
    },
    {
      id: 2,
      name: "경북대학교",
      distance: 350,
      userId: shortid.generate(),
      description: "설명",
      event: "bike",
      gps: {
        type: "LineString",
        coordinates: [
          [128.6107980854627, 35.892532678390346],
          [128.6068460393017, 35.88766339206395],
          [128.61174492985546, 35.88602911241712],
          [128.6145031287387, 35.88856389908935],
          [128.6123212699206, 35.89099855199497],
          [128.6128976099858, 35.89463371630573],
        ],
        id: "62133c5ff58346f2e09756af",
      },
      altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
      ],
      start_latlng: [128.6107980854627, 35.892532678390346],
      end_latlng: [128.6128976099858, 35.89463371630573],
      createdAt: "2022-02-21T07:16:47.648Z",
    },
    {
      id: 3,
      name: "두류공원~동성로",
      distance: 350,
      userId: shortid.generate(),
      description: "설명",
      event: "running",
      gps: {
        type: "LineString",
        coordinates: [
          [128.61568699047842, 35.89783218289432],
          [128.61388454612188, 35.89831887973966],
          [128.6200643553443, 35.89567677518036],
          [128.62714538674498, 35.89696307394185],
          [128.62555751909755, 35.892443553570914],
          [128.62933406917793, 35.89421662693352],
        ],
        id: "62133c5ff58346f2e09756af",
      },
      altitude: [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 34 },
        { x: 5, y: 7 },
      ],
      start_latlng: [128.62933406917793, 35.89421662693352],
      end_latlng: [128.61568699047842, 35.89783218289432],
      createdAt: "2022-02-21T07:16:47.648Z",
    },
  ],
  createMap: [],
  mapRank: [0],
  myMapRank: [0],

  loadMap: null,
  myMap: null,

  Rankloading: false,
  RankDone: false,
  RankError: null,
  myRankloading: false,
  myRankDone: false,
  myRankError: null,

  movingmapLoading: false,
  movingmapDone: false,
  movingmapError: null,
  runningmapLoading: false,
  runningmapDone: false,
  runningmapError: null,
  bikemapLoading: false,
  bikemapDone: false,
  bikemapError: null,
  searchmapLoading: false,
  searchmapDone: false,
  searchmapError: null,
  loadMyLocationLoading: false,
  loadMyLocationDone: false,
  loadMyLocationError: null,
  loadmapLoading: false,
  loadmapDone: false,
  loadmapError: null,
  loadCreatemapLoading: false,
  loadCreatemapDone: false,
  loadCreatemapError: null,
  addmapLoading: false,
  addmapDone: false,
  addmapError: null,
  addTrackLoading: false,
  addTrackDone: false,
  addTrackError: null,
};

export const ADD_TRACK_REQUEST = "ADD_TRACK_REQUEST";
export const ADD_TRACK_SUCCESS = "ADD_TRACK_SUCCESS";
export const ADD_TRACK_FAILURE = "ADD_TRACK_FAILURE";

export const SEARCH_MAP_REQUEST = "SEARCH_MAP_REQUEST";
export const SEARCH_MAP_SUCCESS = "SEARCH_MAP_SUCCESS";
export const SEARCH_MAP_FAILURE = "SEARCH_MAP_FAILURE";

export const LOAD_MAP_REQUEST = "LOAD_MAP_REQUEST";
export const LOAD_MAP_SUCCESS = "LOAD_MAP_SUCCESS";
export const LOAD_MAP_FAILURE = "LOAD_MAP_FAILURE";

export const ADD_MYMAP_REQUEST = "ADD_MYMAP_REQUEST";
export const ADD_MYMAP_SUCCESS = "ADD_MYMAP_SUCCESS";
export const ADD_MYMAP_FAILURE = "ADD_MYMAP_FAILURE";

export const MOVING_MAP_REQUEST = "MOVING_MAP_REQUEST";
export const MOVING_MAP_SUCCESS = "MOVING_MAP_SUCCESS";
export const MOVING_MAP_FAILURE = "MOVING_MAP_FAILURE";

export const BIKE_MAP_REQUEST = "BIKE_MAP_REQUEST";
export const BIKE_MAP_SUCCESS = "BIKE_MAP_SUCCESS";
export const BIKE_MAP_FAILURE = "BIKE_MAP_FAILURE";

export const RUNNING_MAP_REQUEST = "RUNNING_MAP_REQUEST";
export const RUNNING_MAP_SUCCESS = "RUNNING_MAP_SUCCESS";
export const RUNNING_MAP_FAILURE = "RUNNING_MAP_FAILURE";

export const LOAD_CREATEMAP_REQUEST = "LOAD_CREATEMAP_REQUEST";
export const LOAD_CREATEMAP_SUCCESS = "LOAD_CREATEMAP_SUCCESS";
export const LOAD_CREATEMAP_FAILURE = "LOAD_CREATEMAP_FAILURE";

export const LOAD_MY_LOCATION_REQUEST = "LOAD_MY_LOCATION_REQUEST";
export const LOAD_MY_LOCATION_SUCCESS = "LOAD_MY_LOCATION_SUCCESS";
export const LOAD_MY_LOCATION_FAILURE = "LOAD_MY_LOCATION_FAILURE";

export const LOAD_TRACK_RANK_REQUEST = "LOAD_TRACK_RANK_REQUEST";
export const LOAD_TRACK_RANK_SUCCESS = "LOAD_TRACK_RANK_SUCCESS";
export const LOAD_TRACK_RANK_FAILURE = "LOAD_TRACK_RANK_FAILURE";

export const LOAD_TRACK_MYRANK_REQUEST = "LOAD_TRACK_MYRANK_REQUEST";
export const LOAD_TRACK_MYRANK_SUCCESS = "LOAD_TRACK_MYRANK_SUCCESS";
export const LOAD_TRACK_MYRANK_FAILURE = "LOAD_TRACK_MYRANK_FAILURE";

const reducer = (state = initialStates, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TRACK_MYRANK_REQUEST:
        draft.myRankloading = true;
        draft.myRankDone = false;
        draft.myRankError = null;
      case LOAD_TRACK_MYRANK_SUCCESS:
        draft.myRankloading = false;
        draft.myRankDone = true;
        draft.myMapRank = [];
        draft.myMapRank.push(action.data);

      case LOAD_TRACK_MYRANK_FAILURE:
        (draft.myRankloading = false), (draft.myRankError = "a");

      case LOAD_TRACK_RANK_REQUEST:
        draft.Rankloading = true;
        draft.RankDone = false;
        draft.RankError = null;
      case LOAD_TRACK_RANK_SUCCESS:
        draft.Rankloading = false;
        draft.RankDone = true;
        draft.mapRank = [];
        draft.mapRank.push(action.data);
      // draft.mapRank=action.data
      case LOAD_TRACK_RANK_FAILURE:
        (draft.Rankloading = false), (draft.RankError = "a");
      case SEARCH_MAP_REQUEST:
        draft.searchmapLoading = true;
        draft.searchmapDone = false;
        draft.searchmapError = null;
        break;
      case SEARCH_MAP_SUCCESS:
        draft.searchmapLoading = false;
        draft.searchmapDone = true;
        console.log("sss", action.data);
        draft.searchMap = [];
        // dummyMap().map((m)=>[
        //     draft.searchMap.push(m)
        // ])
        action.data.result.map((m) => [draft.searchMap.push(m)]);
        console.log("qqqqq", draft.searchMap);
        // draft.searchMap.unshift(dummyMap().map());
        break;
      case SEARCH_MAP_FAILURE:
        draft.searchmapLoading = false;
        draft.searchmapError = action.error;
        break;

      case MOVING_MAP_REQUEST:
        draft.movingmapLoading = true;
        draft.movingmapDone = false;
        break;
      case MOVING_MAP_SUCCESS:
        draft.movingmapLoading = false;
        draft.movingmapDone = true;
        draft.searchMap = [];

        action.data.result.map((m) => [draft.searchMap.push(m)]);
        break;
      case MOVING_MAP_FAILURE:
        draft.movingmapLoading = false;
        draft.movingmapError = action.error;
        break;

      case BIKE_MAP_REQUEST:
        draft.bikemapLoading = true;
        draft.bikemapDone = false;
        break;
      case BIKE_MAP_SUCCESS:
        draft.bikemapLoading = false;
        draft.bikemapDone = true;
        draft.searchMap = [];

        action.data.result.map((m) => [draft.searchMap.push(m)]);
        break;
      case BIKE_MAP_FAILURE:
        draft.bikemapLoading = false;
        draft.bikemapError = action.error;
        break;

      case RUNNING_MAP_REQUEST:
        draft.runningmapLoading = true;
        draft.runningmapDone = false;
        break;
      case RUNNING_MAP_SUCCESS:
        draft.runningmapLoading = false;
        draft.runningmapDone = true;
        draft.searchMap = [];

        action.data.result.map((m) => [draft.searchMap.push(m)]);
        break;
      case RUNNING_MAP_FAILURE:
        draft.runningmapLoading = false;
        draft.runninmgmapError = action.error;
        break;

      case ADD_TRACK_REQUEST:
        draft.addTrackLoading = true;
        draft.addTrackDone = false;
        break;
      case ADD_TRACK_SUCCESS:
        draft.addTrackLoading = false;
        draft.addTrackDone = true;
        break;
      case ADD_TRACK_FAILURE:
        draft.addTrackLoading = false;
        draft.addTrackError = action.error;
        break;

      case LOAD_MAP_REQUEST:
        draft.loadmapLoading = true;
        draft.loadmapDone = false;
        draft.loadmapError = null;
        break;
      case LOAD_MAP_SUCCESS:
        draft.loadmapLoading = false;
        draft.loadmapDone = true;
        console.log("qwzxc", action.data);

        draft.loadMap = action.data;
        draft.loadMap.altitude = draft.loadMap.altitude.map((a, index) => ({
          x: index,
          y: a,
        }));
        break;
      case LOAD_MAP_FAILURE:
        draft.loadmapLoading = false;
        draft.loadmapError = action.error;
        break;
      //

      case LOAD_MY_LOCATION_REQUEST:
        draft.loadMyLocationLoading = true;
        draft.loadMyLocationDone = false;
        draft.loadMyLocationError = null;
        break;
      case LOAD_MY_LOCATION_SUCCESS:
        draft.loadMyLocationLoading = false;
        draft.loadMyLocationDone = true;
        action.data.result.map((m) => [draft.searchMap.push(m)]);
        break;
      case LOAD_MY_LOCATION_FAILURE:
        draft.loadMyLocationLoading = false;
        draft.loadMyLocationError = action.error;
        break;
      //

      case LOAD_CREATEMAP_REQUEST:
        draft.loadCreatemapLoading = true;
        draft.loadCreatemapDone = false;
        draft.loadCreatemapError = null;
        break;
      case LOAD_CREATEMAP_SUCCESS:
        draft.loadCreatemapLoading = false;
        draft.loadCreatemapDone = true;
        draft.createMap = action.data;
        draft.createMap.gpsData.altitude = draft.createMap.gpsData.altitude.map(
          (a, index) => ({
            x: index,
            y: a,
          })
        );

        break;
      case LOAD_CREATEMAP_FAILURE:
        draft.loadCreatemapLoading = false;
        draft.loadCreatemapError = action.error;
        break;

      case ADD_MYMAP_REQUEST:
        draft.addmapLoading = true;
        draft.addmapDone = false;
        draft.addmapError = null;
        break;
      case ADD_MYMAP_SUCCESS:
        draft.addmapLoading = false;
        draft.addmapDone = true;
        break;
      case ADD_MYMAP_FAILURE:
        draft.addmapLoading = false;
        draft.addmapError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
