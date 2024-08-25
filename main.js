//___________________________________________________________
//Burda deyiseni yaradib onu istifade etdik, ve deyiseni yaradanda ilk reqemle baslaya bilmez,
//ve simvollardan istifade oluna bilmez, yalniz $ ve _ isareleri istifade oluna biler.
// var user name="";Bele deyiseni ayri yazmaq olmaz.
//Proqramlasdirma dili terefinden tutulmus olan sozleri yeni keywordler-i istifade ederek deyisen yaratmaq olmaz.
// var userName = "Jack";
// console.log("Welcome " + userName);
//___________________________________________________________

//___________________________________________________________
//Burda user_name1-deyiseni yaradib ona deyer menimsetdim,sonra hemin deyiseni duger user_name2-deyisenine yazdim
//sonradan user_name1-i deyisdim ve ekrana cixardanda user_name2-deyismedi cunki,string tipli data saxliyan
//deyisenlerdir ve string-JS-de primitive type-dir,immutable-dir.Yeni her-hansi bir primitive type-da deyiseni
//diger deyisene menimsedende onun deyeri menimsedilir,adresi yox,ona gore de sonradan basqa bir deyer menimsedilende
//digeri deyismir.
// var user_name1="John";
// var user_name2=user_name1;
// user_name1="Mike";
// console.log(user_name1);
// console.log(user_name2);

//Burda ise array reference(complex) type-oldugu ucun users-i admins-e menimsetdim ve artiq her-hansi birinin
//adindan push-edib yeni data elave edende her ikiside deyisecek,cunki reference type-lardir ve onlari diger deyere
//menimsedende reference-i yeni adresi menimsedilir ve artiq hemin push-metodu vasitesile yeni data elave edende
//hemin adresdeki deyere elave edir ve ikiside eyni adresi saxladigi ucun ekrana cixardanda,output-u eyni olur.
// var users=['Henry','Jack','Larry'];
// var admins=users;
// // admins=['Thomas','Joe'];//amma bele edende admins-ayri,users-ayri olur,cunki,artiq admins-e yeni adres menimsedilib
// admins.push('Mike');
// users.push('Kaine');
// console.log(admins);
// console.log(users);

//___________________________________________________________
// let students=['Larry','John','Jack','Keine','Mike'];
// // let topStudents=students.slice(0,3);
// let topStudents=students.splice(0,3);

// let otherStudents=[...students];//Reference-i eyni deyil,cunki,students-arrayini parcalayib kopyalayiriq
// //icindeki datalari diger bir arraye
// otherStudents.push('otherStudent');

// console.log(students);
// console.log(topStudents);
// console.log(otherStudents);
//___________________________________________________________

// var data="Hello";
// console.log(data.length);//.length string-in property-dir, ve onun uzunlugunu tapir
// console.log(data + " students");
// console.log(`${data} students`);

// var data1=null;
// var data2;
// var num=11n;
// var num2=Symbol('Any symbol');
// console.log(num2);

// function DoAny(){
//     console.log("......");
// }
// console.log(typeof num2);
// console.log(typeof data);
// console.log(typeof data1);
// console.log(typeof data2);
// console.log(typeof num);
// console.log(typeof DoAny);

// // var age=prompt("Enter age")/1;
// // var age = prompt("Enter age") * 1;
// var age = Number(prompt("Enter age"));
// // var lastAge = age / 1 + 10;
// // var lastAge = age * 1 + 10;
// var lastAge = age * 10;
// console.log(typeof age, age);
// console.log(typeof lastAge, lastAge);

// var check = true;
// console.log(Number(check));

// var number = 123456.123456;
// var number2 = number.toFixed(2);//toFixed edende artiq hemin deyerin tipini string-e cevirir
// console.log(typeof number,number);
// console.log(typeof number2,number2);
/*
string-den number-e cevirmenin yollari
1. *  vurma  ile
2. /  bolme  ile
3. Number()  explicit formada typecast-ile

*/

// // var num=1;
// // var num=0;
// // var num=-1;
// // console.log(Boolean(num));//0-da false ondan basqa diger hamsinda true verecek.
// var number=!0;//boolean deyere cevirir,nedirse onun eksine, 0-ise eger true,digerlerinde false
// var number=!!0;//boolean deyere cevirir,nedirse ona, 0-ise eger false,digerlerinde true
// console.log(number);
// var data=null;
// console.log(Boolean(data));
// console.log(Boolean(undefined));

/*
Stack - yaddash sahesi statik yaddash sahesidir yeni, ona hansisa data yazan datanin olchusu evvelceden bilinmelidir,
cunki,bir deyishen yaradilan zaman stack-da onun harada yerlesileceyi qabaqcadan bilinir yeni stack-onuncun yer
ayirir. Olchusu 1mb-dir. Heap-den ferqli olaraq islemesi daha suretlidir. Burda her-hansi dayisen yaradib istifade 
edib sonra harda yaradiibsa, yeni hansi scope-un icinde yaradilibsa hemin scope-un sonuna catan zaman 
emeliyyat sistemi avtomatik olaraq onu ram-dan silir.Burda stack-in olchusunu ashanda "Stack Overflow"- yeni
Stackin dashmasi xetasi bas verir.Stack-LIFO(Last In First Out) or FILO(First In Last Out)-son gelen data birinci
cixar,ilk gelen data ise sonuncu cixar prinsipi ile ishleyir. Stack-da primitive(value) type-lar ve reference type-
larin adresleri saxlanilir,deyerleri ise heap-de saxlanilir.

Heap - yaddash sahesi dinamik yaddas sahesidir,yeni orda saxlanilan her-hansi datanin qabaqcadan olchusunun bilinmesi
lazim deyil,cunki,yeteri qeder olchusu olur,ve stack-e nisbeten yavash isleyir,cunki, burda data yerlesdirilen
zaman onun harada olacagi qabaqcadan bilinmir,ve o hemin datanin olcusune uygun ram-dan bosh xanalari tapana qeder
vaxt gedir. Burda saxladigimiz datani ozumuz silmeliyik,cunki,heap yaddash sahesini emeliyyat sistemi idare etmir,
bunu yazan proqramchinin ozu idare edir.Eger silinmeli olan datani silmek ucun Garbage Collector - ishe dushur
ve reference-qalmayan yeni artiq ona istinad edilmirse,ondan istifade edilmirse Garbage Collector gelir onnu silir.
Heap-FIFO(First In First Out) or LILO(Last In Last Out) - ilk gelen data ilk cixar ve ya son gelen data son cixar-
mentiqi ile isleyir,ve reference type-lar heap-de saxlanilir yeni onlarin deyerleri heap-de bir adresde saxlanilir.

*/