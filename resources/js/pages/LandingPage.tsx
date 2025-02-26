import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import '../../css/LandingPage.css';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="container">
            <div className="content">
                <img src="logo.png" alt="PRFS Logo" className="logo" />
                <h1>
                    <span>Reserve with Ease</span>
                    <br />
                    Manage with Confidence
                </h1>
                <p>
                    Simplify the booking process with a user-friendly interface.
                    <br />
                    Access real-time availability of facilities and equipment.
                    <br />
                    Designed to streamline event planning for students, staff, and administrators.
                    <br />
                    Keep track of reservations with automated notifications and updates.
                </p>
                <a href="/LogInPage" className="login-btn">Proceed to login →</a>
            </div>
            <div className="illustration"></div>
        </div>
    );
}
