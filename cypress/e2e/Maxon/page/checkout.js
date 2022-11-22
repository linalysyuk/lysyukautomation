
class checkout {
    
    selectors = {
        Price:()=>('.col-5 strong'),
    };
       
    Price(){
            this.selectors.Price().should('be.visible');
    };
};
module.exports = new checkout();