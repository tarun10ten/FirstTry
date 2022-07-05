using {mtk.com.studentreport as std } from '../db/FirstTry_db';

service Fail@(impl:'./FirstTry_srv_1.js') {
     @readonly entity Student as SELECT from std.Student {*};
}
service Pass@(impl:'./FirstTry_srv_2.js') {
     @readonly entity Student as SELECT from std.Student {*};
}

  /** For display in details pages */
// service Pass@(impl:'./FirstTry_srv_2.js') {
//   @readonly entity Student as select from std.Student { *, 
//   'SAP SE' as company : String,
//    null   as result: String(100)
//    }; 
// } 
//   excluding { createdBy, modifiedBy };