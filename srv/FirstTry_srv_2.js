module.exports = (srv)=>{

    const {Student} = cds.entities
   
//    srv.after ('READ','Student', (each)=>{
//        if (each.score > 50) 
//        each.name +=  ' -- Pass'
//      })
     srv.after ('READ','Student', (each)=>{
        if (each.score > 50) {
        each.result =  'Pass'
      }else{
        each.result =  'Fail' 
      }
    })
   }