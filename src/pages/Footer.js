import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="text4" style={{ marginLeft: "200px" }}>
        <div>
          <div className="cof">
            <img src="./images/cofeee.svg" className="" alt="ref" />
            <div style={{ paddingLeft: "10px" }}>Buy us a Coffee</div>
          </div>
          <div>0x1C7b949ab51f7d1a981d5b8AdB0CAb4D7Dd3C316</div>
          <div style={{ marginTop: "30px", marginBottom: "20px" }}>
            <div>
              <a
                href="https://t.me/keepitdefi"
                style={{ color: "#F4AA00" }}
                target="_blank"
                rel="noreferrer"
              >
                Join KeepItDefi Telegram community
              </a>
            </div>
            <div>
              <a
                href="https://t.me/KeepitDefi_HNW_Price_update"
                style={{ color: "#F4AA00" }}
                target="_blank"
                class="button"
                rel="noreferrer"
              >
                KeepItDefi HNW Price Update Group
              </a>
            </div>
          </div>
        </div>
        <div>Developed by KeepItDefi Team</div>
        <div>© 2022 KeepItDefi. All rights Reserved.</div>
      </div>
    </div>
  );
}
