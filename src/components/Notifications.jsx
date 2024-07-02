import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notifications = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img 
      src={notification1} 
      alt="note-1"
      width={62}
      height={62}
      className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5 items-center justify-between">
            {notificationImages.map((notification, index) => (
              <li
                key={index}
                className="inline-block border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={notification}
                  alt="notify"
                  key={index}
                  className="w-full"
                  width={10}
                  height={10}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
