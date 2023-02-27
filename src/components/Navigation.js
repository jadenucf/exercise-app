
const Navigation = ({ onChange, HOME_SCREEN, EXERCISE_SCREEN }) => {


  return (
    <div className="navigation__wrapper">
      <nav className="navigation">
        <ul className="navigation__content">
          <li className="navigation__item" onClick={() => onChange(HOME_SCREEN)}>
            Home
          </li>
          <li className="navigation__item" onClick={() => onChange(EXERCISE_SCREEN)}>
            Exercises
          </li>
          <li className="navigation__item" >
            History
          </li>
          <li className="navigation__item" onClick={() => onChange(EXERCISE_SCREEN)}>
            <svg className="navigation__icon"width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.375 7.49984C4.37509 4.39331 6.89346 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5L15.6248 7.54099V8.125C15.6248 9.89428 16.2924 11.5062 17.3903 12.7249C17.529 12.8789 17.5824 13.0917 17.5327 13.293C17.4831 13.4942 17.3369 13.6578 17.1424 13.7296C15.8557 14.2045 14.5088 14.5549 13.1163 14.766C13.1221 14.8433 13.125 14.9213 13.125 15C13.125 16.7259 11.7259 18.125 10 18.125C8.27411 18.125 6.875 16.7259 6.875 15C6.875 14.9214 6.87792 14.8433 6.88366 14.766C5.49111 14.5549 4.14405 14.2046 2.85728 13.7296C2.66282 13.6578 2.5166 13.4942 2.46693 13.293C2.41727 13.0917 2.47063 12.8789 2.60938 12.7249C3.70732 11.5062 4.37484 9.89428 4.37484 8.125L4.375 7.49984ZM8.12684 14.9161C8.12562 14.9439 8.125 14.9718 8.125 15C8.125 16.0355 8.96447 16.875 10 16.875C11.0355 16.875 11.875 16.0355 11.875 15C11.875 14.9718 11.8744 14.9438 11.8732 14.916C11.256 14.9716 10.6312 15 9.99984 15C9.36862 15 8.74388 14.9716 8.12684 14.9161Z" fill="white"/>
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation