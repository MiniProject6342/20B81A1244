import React from 'react'
import DisplayTrain from './DisplayTrain'
export default function SingleTrain() {
  return (
    <div>
      <html>
            <body>
                <header>
                    <h1 class="hd">National Ticket Booking Spot</h1>
                    <div class="home">
                        <p class="menu">
                            <a href="userhome">Home</a>
                        </p>
                    </div>
                    <div class="home">
                        <p class="menu">
                            <a href="userviewtrainfwd">View Trains</a>
                        </p>
                    </div>
                    <div class="home">
                        <p class="menu">
                            <a href="useravailfwd">Seat Availability</a>
                        </p>
                    </div>
                    <div class="home">
                        <p class="menu">
                            <a href="usersearchtrain">Search By TrainNo</a>
                        </p>
                    </div>
                    <div class="home">
                        <p class="menu">
                            <a href="userprofile">Profile</a>
                        </p>
                    </div>
                    <div class="home">
                        <p class="menu">
                            <a href="userlogout">Logout</a>
                        </p>
                    </div>
                </header>
                <div class="tab">
                    <p class="menu">Seat Availability</p>
                </div>
                <form action="useravail" class="tab red" method="post">
                    TrainNumber: <input type="text" name="trainno"/><br /> <br />
                        <input type="submit" value=" SEARCH TRAIN AVAILABILITY"/><br />
                </form>
                        <br />

            </body>
        </html>
    </div>
  )
}
