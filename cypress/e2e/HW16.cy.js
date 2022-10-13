/*Comments:
Еще должна быть вторая задача.
И так домашнее задание:
Home work: 
1.Если не закончили с практическим заданием - дописываем
2. Дописать тесты на https://gorest.co.in/
PUT / Path и DELETE (по аналогии с практическим)
*/


//*
describe('empty spec', () => {
    it('passes', () => {
      cy.request({
        method:'POST',
        url:'https://restful-booker.herokuapp.com/auth',
        header:{
          'Content-Type': 'application/json'
        },
        body:{
          "username" : "admin",
          "password" : "password123"
        }
      }).then((response)=>{
        const autoToken = response.body;
        cy.log(autoToken);
      }).then((response)=>{
          cy.request({
          method:'POST',
          url:'https://restful-booker.herokuapp.com/booking',
          header:{
            'Content-Type': 'application/json'
          },
          body:{
            firstname : "Alex",
            lastname : "Brown",
            totalprice : 113,
            depositpaid : true,
            bookingdates : {
                checkin : "2022-01-01",
                checkout : "2023-01-01"
                      },
            additionalneeds : "Breakfast"
          }
        }).then((response)=>{
         // expect(response).to.have.property('status', 200);
          const bookingId = response.body.bookingid;
          cy.log(bookingId);
          const autoToken = response.body;
          cy.request({
            method:'PUT',
            url:`https://restful-booker.herokuapp.com/booking/${bookingId}`,
            header:{
              'Cookie': `${autoToken}`,
            },
            body:{
              firstname : "Olha",
             // lastname : "Grifin",
            //  totalprice : 115,
             // depositpaid : true,
             // bookingdates : {
             // checkin : "2023-01-01",
             // checkout : "2024-01-01"
      },
            // additionalneeds : "Breakfast"
         //   }
          })
        })
      })
    })
  })
