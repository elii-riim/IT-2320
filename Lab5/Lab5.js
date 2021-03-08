function getDiscountPercent(){


var book1 = {name:'A Time To Kill', author:'John Grisham', price:20};
var book2 = { name:'The House of Mirth', author:'Edith Wharton', price:70};
var book3 = {name:'East of Eden', author:'John Steinback', price:50}
var book4 = {name:'The Sun Also Rises', author:'Ernest Hemingway', price:20}
var book5 = {name:'Vile Bodies', author:'Evenlyn Waugh', price:40}
var book6 = {name:'A Scanner Darkly', author:'Philip k. Dick', price:65}
var book7 = {name:'Moab Is My Washpot', author:'Stephen Fry', price:30}
var book8 = {name:'Number The Star', author:'Lois Lowry', price:45}
var book9 = {name:'Noli Me Tangere', author:'Jose Rizal', price:25}
var book10 = {name:'Brave New World', author:'Aldous Huxley', price:80}
var book11 = {name:'Rosemary and Rue', author:'Seanan Mcguire', price: 90}
var book12 = {name:'Pale Fire', author:'Vladimir Nabokov', price:75}
var book13 = {name:'Remembrance Of Things Past', author:'Marcel Proust', price:60}
var book14 = {name:'The Fault In Our Stars', author:'John Green', price:55}
var book15 = {name:'Cold COmfort Farm', author:'Stella Gibbons', price:35}
var book16 = {name:'In cold Blood', author:'Truman Capote', price:10}
var book17 = {name:'Behold Here Poison', author:'Georgette Heyer', price:15}
var book18 = {name:'Band Of Brothers', author:'Stephen E. Ambrose', price:85}
var book19 = {name:'Mortal Engines', author:'Philip Reeve', price:90}
var book20 = {name:'The Dark Tower', author:'Stephen King', price:100}


let books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12
, book13, book14, book15, book16, book17, book18, book19, book20];


books.forEach(function(item){
    if(item === book1){
        newBook1 = book1.price - (book1.price * .05);
        book1.salePrice = newBook1;
    }
})
books.forEach(function(item){
    if(item === book2){
        newBook2 = book2.price - (book2.price * .10);
        book2.salePrice = newBook2;
    }
})
books.forEach(function(item){
    if(item === book3){
        newBook3 = book3.price - (book3.price * .12);
        book3.salePrice = newBook3;
    }
})
books.forEach(function(item){
    if(item === book4){
        newBook4 = book4.price - (book4.price * .12);
        book4.salePrice = newBook4;
    }
})
books.forEach(function(item){
    if(item === book5){
        newBook5 = book5.price - (book5.price * .12);
        book5.salePrice = newBook5;
    }
})
books.forEach(function(item){
    if(item === book6){
        newBook6 = book6.price - (book6.price * .12);
        book6.salePrice = newBook6;
    }
})
books.forEach(function(item){
    if(item === book7){
        newBook7 = book7.price - (book7.price * .12);
        book7.salePrice = newBook7;
    }
})
books.forEach(function(item){
    if(item === book8){
        newBook8 = book8.price - (book8.price * .12);
        book8.salePrice = newBook8;
    }
})
books.forEach(function(item){
    if(item === book9){
        newBook9 = book9.price - (book9.price * .12);
        book9.salePrice = newBook9;
    }
})
books.forEach(function(item){
    if(item === book10){
        newBook10 = book10.price - (book10.price * .12);
        book10.salePrice = newBook10;
    }
})
books.forEach(function(item){
    if(item === book11){
        newBook11 = book11.price - (book11.price * .12);
        book11.salePrice = newBook11;
    }
})
books.forEach(function(item){
    if(item === book12){
        newBook12 = book12.price - (book10.price * .12);
        book12.salePrice = newBook12;
    }
})
books.forEach(function(item){
    if(item === book13){
        newBook13 = book13.price - (book13.price * .12);
        book13.salePrice = newBook13;
    }
})
books.forEach(function(item){
    if(item === book14){
        newBook14 = book14.price - (book14.price * .12);
        book14.salePrice = newBook14;
    }
})
books.forEach(function(item){
    if(item === book15){
        newBook15 = book15.price - (book15.price * .12);
        book15.salePrice = newBook15;
    }
})
books.forEach(function(item){
    if(item === book10){
        newBook16 = book16.price - (book16.price * .12);
        book16.salePrice = newBook16;
    }
})
books.forEach(function(item){
    if(item === book17){
        newBook17 = book17.price - (book17.price * .12);
        book17.salePrice = newBook17;
    }
})
books.forEach(function(item){
    if(item === book18){
        newBook18 = book18.price - (book18.price * .12);
        book18.salePrice = newBook18;
    }
})
books.forEach(function(item){
    if(item === book19){
        newBook19 = book19.price - (book19.price * .12);
        book19.salePrice = newBook19;
    }
})
books.forEach(function(item){
    if(item === book10){
        newBook20 = book10.price - (book20.price * .12);
        book20.salePrice = newBook20;
    }
})








console.log(book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12
    , book13, book14, book15, book16, book17, book18, book19, book20);
 
}

