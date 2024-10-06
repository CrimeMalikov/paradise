function LastGame() {
  return (
    <div className="flex ssm:flex-wrap md:flex-nowrap bg-white dark:bg-[#252A42CC] items-center justify-between py-[11px] pl-[11px] pr-[15px] rounded-[16px] gap-2">
      <div>
        <p className="md:block lg:hidden text-xs font-semibold text-[#7F89C1] mb-2">
          Игра
        </p>
        <div className="flex items-center gap-[8px] text-[#343A60] dark:text-white font-semibold">
          <span className="w-[38px] h-[38px] flex items-center justify-center rounded-2xl bg-[#EDEFFA] dark:bg-[#171B2D73] dark:border border-[#171B2D]">
            <svg
              width="18.000000"
              height="18.000000"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip19_13381">
                  <rect
                    id="Frame"
                    rx="-0.500000"
                    width="17.000000"
                    height="17.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Frame"
                rx="-0.500000"
                width="17.000000"
                height="17.000000"
                transform="translate(0.500000 0.500000)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip19_13381)">
                <path
                  id="Vector"
                  d="M17.82 5.87L17.43 5.48C17.2 5.25 16.83 5.25 16.6 5.48C16.37 5.71 16.37 6.08 16.6 6.31L16.99 6.7C17.11 6.82 17.26 6.88 17.41 6.88C17.56 6.88 17.71 6.82 17.82 6.7C18.05 6.48 18.05 6.1 17.82 5.87Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="Vector"
                  d="M15.48 5.48C15.25 5.25 14.87 5.25 14.65 5.48L14.25 5.87C14.02 6.1 14.02 6.48 14.25 6.7C14.37 6.82 14.52 6.88 14.67 6.88C14.82 6.88 14.97 6.82 15.08 6.7L15.48 6.31C15.7 6.08 15.7 5.71 15.48 5.48Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="Vector"
                  d="M17.82 3.14C17.71 3.02 17.56 2.96 17.41 2.96C17.26 2.96 17.11 3.02 16.99 3.14L16.6 3.53C16.37 3.76 16.37 4.13 16.6 4.36C16.83 4.59 17.2 4.59 17.43 4.36L17.82 3.97C18.05 3.74 18.05 3.36 17.82 3.14Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
                <path
                  id="Vector"
                  d="M15.52 3.67L14.69 2.84C14.01 2.15 12.89 2.15 12.2 2.84L11.93 3.12L11.1 2.29C10.87 2.06 10.49 2.06 10.27 2.29L8.7 3.85C7.94 3.53 7.11 3.36 6.25 3.36C4.58 3.36 3.01 4.01 1.83 5.19C-0.62 7.63 -0.62 11.6 1.83 14.05C3.01 15.23 4.58 15.88 6.25 15.88C7.93 15.88 9.5 15.23 10.68 14.05C11.86 12.86 12.51 11.29 12.51 9.62C12.51 8.76 12.34 7.94 12.02 7.17L13.59 5.61C13.81 5.38 13.81 5.01 13.59 4.78L12.76 3.95L13.03 3.67C13.26 3.44 13.63 3.44 13.86 3.67L14.69 4.5C14.81 4.61 14.96 4.67 15.11 4.67C15.26 4.67 15.41 4.61 15.52 4.5C15.75 4.27 15.75 3.9 15.52 3.67ZM9.02 12.38C8.28 13.12 7.3 13.53 6.26 13.53C5.21 13.53 4.23 13.12 3.49 12.38C3.26 12.15 3.26 11.78 3.49 11.55C3.72 11.32 4.09 11.32 4.32 11.55C4.84 12.07 5.53 12.35 6.26 12.35C6.99 12.35 7.67 12.07 8.19 11.55C8.42 11.32 8.79 11.32 9.02 11.55C9.25 11.78 9.25 12.15 9.02 12.38Z"
                  fill="#7F89C1"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </span>

          <span>Mines</span>
        </div>
      </div>
      <div>
        <p className="md:block lg:hidden text-xs font-semibold text-[#7F89C1] mb-2">
          Игрок
        </p>
        <div className="flex items-center gap-[8px] text-[#343A60] dark:text-white font-semibold">
          <img
            className="ssm:w-[38px] ssm:h-[38px] lg:w-12 lg:h-12 object-cover"
            src="../../assets/icons/profile_img.png"
            alt=""
          />
          <span>Nikita Ty***</span>
        </div>{" "}
      </div>
      <div>
        <p className="md:block lg:hidden text-xs font-semibold text-[#7F89C1] mb-2">
          Ставка
        </p>
        <div className="flex items-center gap-[8px] text-[#343A60] dark:text-white font-semibold py-[8px] px-[9px] bg-[#E0E3F4] dark:bg-[#1B1E31] rounded-[8px]">
          <img src="../../assets/icons/coins.svg" alt="" />
          <span>500</span>
        </div>
      </div>
      <div>
        <p className="md:block lg:hidden text-xs font-semibold text-[#7F89C1] mb-2">
          Коэффициент
        </p>
        <div className="p-[11px] bg-[#E0E3F4] dark:bg-[#313754] rounded-[8px]">
          <span className="font-semibold text-[#343A60] dark:text-white">
            х34.24
          </span>
        </div>
      </div>
      <div>
        <p className="md:block lg:hidden text-xs font-semibold text-[#7F89C1] mb-2">
          Результат
        </p>
        <div className="flex items-center gap-[8px] text-white font-semibold py-[8px] px-[9px] bg-[#16A58B] rounded-[8px]">
          <img src="../../assets/icons/coins.svg" alt="" />
          <span>500</span>
        </div>
      </div>
    </div>
  );
}

export default LastGame;