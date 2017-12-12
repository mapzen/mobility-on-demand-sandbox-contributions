export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  // passthough whitelists this domain to avoid Mirage error
  this.passthrough('http://localhost:3103/**');
 
  // this.get('/responses', () => {
  //   return {
  //     "coverage":{},
  //     "type":"ESRI",
  //     "data":"https://services.arcgis.com/f4rR7WnIfGBdVYFd/arcgis/rest/services/Valid_Address_Points_FNSB/FeatureServer/0",
  //     "source_data":{
  //       "fields":["OBJECTID","ADD_ID","HSE_NUMB","SNAM_PREMOD","SNAM_PREDIR","SNAME","SNAM_POSTYPE","SNAM_POSDIR","SNAM_POSMOD","FULL_STREET","SUB_ADD_TYPE","SUB_ADD_ID","FULL_ADDRESS","PLACE_NAME","FECC_COMM","ZIPCODE","ADD_TYPE","NOTES","STATUS","MOD_DATE","GIS_ID","GlobalID"],
  //       "results":[
  //         {"OBJECTID":1,"ADD_ID":40973,"HSE_NUMB":2058,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD #2","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2058 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":null,"STATUS":"ACTIVE","MOD_DATE":1336521600000,"GIS_ID":null,"GlobalID":"2301e6b8-fa81-4c34-b946-4fcef0884f22"},
  //         {"OBJECTID":2,"ADD_ID":40974,"HSE_NUMB":2057,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2057 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":null,"STATUS":"ACTIVE","MOD_DATE":1336521600000,"GIS_ID":null,"GlobalID":"ff331b3b-164b-4f7c-bd3e-7ee8496f2a3c"},
  //         {"OBJECTID":3,"ADD_ID":40975,"HSE_NUMB":2056,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2056 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":"Exception - No bldg outline","STATUS":"ACTIVE","MOD_DATE":1469491200000,"GIS_ID":null,"GlobalID":"fab30183-f254-4fd1-98ba-19f5e87fe57f"},
  //         {"OBJECTID":4,"ADD_ID":40976,"HSE_NUMB":2055,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2055 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":null,"STATUS":"ACTIVE","MOD_DATE":1336521600000,"GIS_ID":null,"GlobalID":"74c405ba-19b5-488f-87cd-1a1fe98562e0"},
  //         {"OBJECTID":5,"ADD_ID":40977,"HSE_NUMB":2054,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2054 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":"Exception - No bldg outline","STATUS":"ACTIVE","MOD_DATE":1469491200000,"GIS_ID":null,"GlobalID":"3b6104b4-89f9-49dc-b1c4-f7ad61023767"},
  //         {"OBJECTID":6,"ADD_ID":40978,"HSE_NUMB":2053,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2053 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":"Exception - No bldg outline","STATUS":"ACTIVE","MOD_DATE":1469491200000,"GIS_ID":null,"GlobalID":"73b85f27-ca65-40a1-9b26-25b833873b2a"},
  //         {"OBJECTID":7,"ADD_ID":40972,"HSE_NUMB":2059,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2059 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":"Exception - No bldg outline","STATUS":"ACTIVE","MOD_DATE":1469491200000,"GIS_ID":null,"GlobalID":"d8b96c4f-3159-41ed-b673-590c30f008ad"},
  //         {"OBJECTID":8,"ADD_ID":40981,"HSE_NUMB":2029,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2029 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":"Exception - No bldg outline","STATUS":"ACTIVE","MOD_DATE":1469491200000,"GIS_ID":null,"GlobalID":"68ee0b47-1885-4e98-aced-d198f2ef2b05"},
  //         {"OBJECTID":9,"ADD_ID":40982,"HSE_NUMB":2030,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2030 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":null,"STATUS":"ACTIVE","MOD_DATE":1336562296000,"GIS_ID":null,"GlobalID":"b3def00c-4a62-49a5-9ad7-77b428e56c19"},
  //         {"OBJECTID":10,"ADD_ID":40983,"HSE_NUMB":2031,"SNAM_PREMOD":null,"SNAM_PREDIR":null,"SNAME":"LAKEVIEW TERRACE 2","SNAM_POSTYPE":"RD","SNAM_POSDIR":null,"SNAM_POSMOD":null,"FULL_STREET":"LAKEVIEW TERRACE 2 RD","SUB_ADD_TYPE":null,"SUB_ADD_ID":null,"FULL_ADDRESS":"2031 LAKEVIEW TERRACE 2 RD","PLACE_NAME":null,"FECC_COMM":"FAIR","ZIPCODE":null,"ADD_TYPE":"ADDBLD","NOTES":null,"STATUS":"ACTIVE","MOD_DATE":1336562296000,"GIS_ID":null,"GlobalID":"1ba508c7-29ba-476c-9296-d31f1e6b6f31"}
  //       ]
  //     },
  //     "conform":{
  //       "type":"geojson"
  //     }
  //   }
  // });
}
