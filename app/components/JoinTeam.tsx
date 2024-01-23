import { Link } from "@remix-run/react";

export default function JoinTeamSection() {
  return (
    <div className="join-team-wrapper flex items-center justify-center flex-col">
      <h1>Join Our Team Today</h1>
      <h3>
        We are looking for talented people to join us. Feel free to reach out if
        you are interested!
      </h3>
      <div className="button-wrapper flex items-center justify-center w-100">
        <button className="py-4 px-6 text-base font-normal full-btn">
            <Link to='/career'>Go to careers page</Link>
        </button>
      </div>
    </div>
  );
}
