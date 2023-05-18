// Define your Book class here:
class BookLibary{
  constructor(title, author, copyRightDate, ISBN, numOfPages,numOfBookCheckTime, checkBookDiscard){
    this.title = title;
    this.author = author;
    this.copyRightDate = copyRightDate;
    this.ISBN = ISBN;
    this.numOfPages = numOfPages;
    this.numOfBookCheckTime =numOfBookCheckTime;
    this.checkBookDiscard = checkBookDiscard;
    } 
  checkoutTime(useNo=1){
      this.numOfBookCheckTime += useNo;
  }
  
}


// Define your Manual and Novel classes here:
class Manual extends BookLibary{
  constructor  (title, author, copyRightDate, ISBN,numOfPage, numOfBookCheckTime, checkBookDiscard){
    super(title, author, copyRightDate, ISBN,numOfPage, numOfBookCheckTime, checkBookDiscard)
  }
  
  expiredDate(){
    let currentYear = new Date()
    // console.log(currentYear.getFullYear())
    if ((currentYear.getFullYear() - this.copyRightDate) > 5 ) {
    this.checkBookDiscard = "Yes";
}
  }
}
class Novel extends BookLibary{
  constructor(title, author, copyRightDate, ISBN,numOfPage, numOfBookCheckTime, checkBookDiscard){
    super(title, author, copyRightDate, ISBN,numOfPage, numOfBookCheckTime, checkBookDiscard)
  }
  isDiscarded(){
    if (this.numOfBookCheckTime > 100){
    this.checkBookDiscard = "Yes";
  }
}
}
let manual1 = new Manual("Top Secret Shuttle Building Manual", "Redacted",2013,"0000000000000",114,1,"No")



let novel1 = new Novel("Pride and Perjudice", "Jane Austen",1813,"1111111111111",432,32,"No")


novel1.checkoutTime(5)
manual1.expiredDate()
console.log(novel1);
console.log(manual1);

// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
