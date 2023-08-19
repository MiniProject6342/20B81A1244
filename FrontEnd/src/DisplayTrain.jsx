import React from 'react'
import SingleTrain from './SingleTrain'
// import { useNavigate } from 'react-router-dom';
export default function DisplayTrain() {
    return (
        <html>
            <body>
                <header>
                    <h1 class="hd">Ticket Booking Spot</h1>
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
                </header>

                <div class="main">
                    <p class="menu">Book trains</p>
                </div>
                <div class="tab">
                    <p class="menu red">
                        Please Check The <a href='Availability.html'>Seat availability</a>
                        before Booking !
                    </p>
                </div>
                <form action="booktrains" class="tab red" method="post">
                    TrainNumber: <input type="text" name="trainnumber"/><br /> <br />
                        No of seats: <input type='text' name='seats'/><br /> <br /> <input
                            type="submit" value=" Book Now "/><br />
                        </form>
                            <br />

                        </body>
                    </html>
                    )
}
