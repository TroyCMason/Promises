const statusRef = document.querySelector('.status');
const videoRef = document.querySelector(".video");


//created a function, created a promise within the  function, returned the promise
function getSubscriptionStatus() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve("VIP");
    }, 2000);
    })
}
//1.Then
//getSubscriptionStatus.then (response => console.log(response))

//2.Async/Await
async function main(){
const status=(await getSubscriptionStatus())
statusRef.innerHTML = status
}

main();

// A promise is something that gives you a value some time in the future.

function getVideo(subscriptionStatus) {
    return new promise((resolve, reject) => {
      if (subscriptionStatus === "VIP") {
        resolve("show video")
      } 
      else if (subscriptionStatus === "FREE") {
        resolve("show trailer")
      }
       else {
        reject("no video")
      }
    });
  }
  
  async function main() {
    const status = await getSubscriptionStatus();
    statusRef.innerHTML = status;
    try {
      console.log(await getVideo(status))
    } catch (e) {
      console.log(e);
      videoRef.innerHTML = e;
    }
  }
  
  main();
  