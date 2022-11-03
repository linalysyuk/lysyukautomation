//вариант 2
// export const selectorsOfToolBar={
//buttonMenuHome:'#mainnav > ul > li:nth-child(2)';
//homeSubMenu:'#mainnav > ul > li:nth-child(2) > ul';
//linkOnPage:'#mainnav > ul > li:nth-child(2) > ul> li> a';
//убираем this если этот способ


//вариант 1
class toolBar {

    get buttonMenuHome() {
        return '#mainnav > ul > li:nth-child(2)';
    }
     get homeSubMenu() {
        return '#mainnav > ul > li:nth-child(2) > ul';
     }
     pageInSectionHome(text){
        return cy.get('#mainnav > ul > li:nth-child(2) > ul> li> a').contains(text);

     }
     //
     //Find a link element be text
     //@param text Link name
      
      openPageOnSectionHome(namePage){
        cy.get(this.buttonMenuHome).click();
        cy.get(this.homeSubMenu).invoke('show');
        this.pageInSectionHome('namePage').click();
      }
} module.exports = new toolBar();



//practical task
//Shop
export const selectorsOfShop={
    buttonMenuShop:'#mainnav > ul > li:nth-child(3)',
    ShopSubMenu:'#mainnav > ul > li:nth-child(3) > ul',
    linkOnPage:'#mainnav > ul > li:nth-child(3) > ul> li> a',
}
    class toolBar {

        get buttonMenuShop() {
            return'#mainnav > ul > li:nth-child(3)' ;
        }
         get ShopSubMenu() {
            return '#mainnav > ul > li:nth-child(3) > ul';
         }
         pageInSectionShop(text){
            return cy.get('#mainnav > ul > li:nth-child(3) > ul> li> a').contains(text);
        }
    }
        openPageOnSectionShop(namePage){
        cy.get(this.buttonMenuShop).click();
        cy.get(this.shopSubMenu).invoke('show');
        this.pageInSectionShop('namePage').click();
      }
//Hometask
//Создайте методы на все остальные разделы тулбара (Products, Features,Pages,Blogs)
//Products
export const selectorsOfProducts= {
    buttonMenuProducts:'#mainnav > ul > li:nth-child(4)',
    ProductsSubMenu:'#mainnav > ul > li:nth-child(4) > ul'
    linkOnPage:'#mainnav > ul > li:nth-child(4) > ul> li> a'
}

class toolBar {

    get buttonMenuProducts() {
        return'#mainnav > ul > li:nth-child(4)' 
    }
     get ProductsSubMenu() {
        return '#mainnav > ul > li:nth-child(4) > ul';
    }
     pageInSectionProducts(text){
        return cy.get('#mainnav > ul > li:nth-child(4) > ul> li> a').contains(text);
    }

openPageOnSectionProducts(namePage){
    cy.get(this.buttonMenuProducts).click();
    cy.get(this.ProductsSubMenu).invoke('show');
    this.pageInSectionProducts('namePage').click();
  }

//Features
export const selectorsofFeatures = {
    buttonMenuFeatures:'#mainnav > ul > li:nth-child(5)',
    FeaturesSubMenu:'#mainnav > ul > li:nth-child(5) > ul',
    linkOnPage:'#mainnav > ul > li:nth-child(5) > ul> li> a',
}
class toolBar {

    get buttonMenuFeatures() {
        return'#mainnav > ul > li:nth-child(5)' ;
    }
     get FeaturesSubMenu() {
        return '#mainnav > ul > li:nth-child(5) > ul';
     }
     pageInSectionFeatures(text){
        return cy.get('#mainnav > ul > li:nth-child(5) > ul> li> a').contains(text);
    }
}
openPageOnSectionFeatures(namePage){
    cy.get(this.buttonMenuFeatures).click();
    cy.get(this.FeaturesSubMenu).invoke('show');
    this.pageInSectionFeatures('namePage').click();
  }
  //Pages
  export const selectorOfPages = {
    buttonMenuPages:'#mainnav > ul > li:nth-child(6)',
    PagesSubMenu:'#mainnav > ul > li:nth-child(6) > ul',
    linkOnPage:'#mainnav > ul > li:nth-child(6) > ul> li> a',
}
class toolBar {

    get buttonMenuPages() {
        return'#mainnav > ul > li:nth-child(6)' ;
    }
     get PagesSubMenu() {
        return '#mainnav > ul > li:nth-child(6) > ul';
     }
     pageInSectionPages(text){
        return cy.get('#mainnav > ul > li:nth-child(6) > ul> li> a').contains(text);
    }
}
openPageOnSectionPages(namePage){
    cy.get(this.buttonMenuPages).click();
    cy.get(this.PagesSubMenu).invoke('show');
    this.pageInSectionPages('namePage').click();
  }

  ///Blogs
  export const selectorOfBlogs = {
    buttonMenuBlogs:'#mainnav > ul > li:nth-child(7)',
    BlogsSubMenu:'#mainnav > ul > li:nth-child(7) > ul',
    linkOnPage:'#mainnav > ul > li:nth-child(7) > ul> li> a',
}
class toolBar {

    get buttonMenuBlogs() {
        return'#mainnav > ul > li:nth-child(7)' ;
    }
     get BlogsSubMenu() {
        return '#mainnav > ul > li:nth-child(7) > ul';
     }
     pageInSectionBlogs(text){
        return cy.get('#mainnav > ul > li:nth-child(7) > ul> li> a').contains(text);
    }
}
openPageOnSectionBlogs(namePage){
    cy.get(this.buttonMenuBlogs).click();
    cy.get(this.BlogsSubMenu).invoke('show');
    this.pageInSectionBlogs('namePage').click();
  }module.exports = new toolBar();

 
 
 
  /* practical




/*
  * Internal List of the clothing section/
  */
 class toolbar{
   get clothingSection () {
      return'#mainnav > ul > li:nth-child(2) > ul > li:nth-child(1) > ul'
 }
 /** 
   *Finds a link element by text in the clothing section.
   *@param text link name.
   */
   pageInSectionClothingInHome(text){
       return cy.get('#mainnav > ul > li:nth-child(2) > ul > li:nth-child(1) > ul> li> a')
       .contains(text)
   }

   /** 
   *Opens a page from the home List.
   *@param namePage Name of the section in the List.
   */
   openPageOnSectionHome(namePage, clothingSection){
    cy.get(this.sectionHome).invoke('show');
      if(clothingSection ){
        cy.get(this.clothingSection).invoke('show')
        this.pageInSectionClothingInHome(namePage).click();
      }
      this.pageInSectionHome(namePage).click();

   }