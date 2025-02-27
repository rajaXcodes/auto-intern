import React from "react";
import notfound from "../assets/notfound.svg";

function NotFound() {
  return (
    <section>
      <div className="text-white">
        <div className="flex max-h-screen">
          <div className="m-auto text-center">
            <div>
              <img
                src="https://pouch.jumpshare.com/preview/U3i8JCHRIs2pfTLV1Gr-SIOi1deo_41kzM-zpos0g9S_ZCLNW22ZdVPE6YipoS349H00V3YTSL2H0aESOVCSx5cTYtZ4bWYBNKNICabmiak"
                alt="svg"
              />
            </div>
            <p className="text-sm md:text-base text-yellow-300 p-2 mb-4">
              The stuff you were looking for doesn't exist
            </p>
            <a
              href="/"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Retry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
