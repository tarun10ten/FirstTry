namespace mtk.com.studentreport;

entity Student {
  key ID   : Integer;
  name    :  String(100);
  score :  String(20);
attendance : String;
virtual result : String;
}