import { a, animated, to, Trail, useInView, useSpring, useTrail } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import "./Tech.css";

export const Tech = () => {
  const divToAnimated = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const [divAnimated, divAnimatedApi] = useSpring(() => ({
    from: { x: currentPosition },
    config: { duration: 3000 },
  }));
  const [refUseInView, inViewApi] = useInView({
    rootMargin: "0px 0px -0% 0px",
  });
  const items = ["Hi, I'm Melanie, a Software Engineer Student from Dominican Republic.", "I’m passionate about solving programming challenges and bringing creative projects to life."];

  const [trails, trailsApi] = useTrail(
    items.length,
    {
      config: { mass: 5, tension: 2000, friction: 200, duration: 300 },
      opacity: inViewApi ? 1 : 0,
      x: inViewApi ? 0 : 20,
      height: inViewApi ? 0 : 50,
      from: { opacity: 0, x: 20, height: 0 },
    },
    []
  );

  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
      <circle cx="32" cy="33" r="6" fill="#ed7899"></circle>
      <path fill="#8d6c9f" d="M32,40c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7S35.859,40,32,40z M32,28 c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S34.757,28,32,28z"></path>
      <path fill="#8d6c9f" d="M32,46C15.178,46,2,40.29,2,33s13.178-13,30-13s30,5.71,30,13S48.822,46,32,46z M32,22 C16.822,22,4,27.037,4,33s12.822,11,28,11s28-5.037,28-11S47.178,22,32,22z"></path>
      <path
        fill="#8d6c9f"
        d="M20.316,59.827c-1.222,0-2.335-0.28-3.316-0.847c-3.149-1.818-4.425-6.291-3.593-12.596 c0.793-6.004,3.397-13.065,7.334-19.885c3.938-6.819,8.752-12.606,13.555-16.295C39.341,6.332,43.853,5.202,47,7.02l0,0 c3.149,1.818,4.425,6.291,3.593,12.596C49.8,25.619,47.195,32.681,43.259,39.5c-3.938,6.819-8.752,12.606-13.555,16.295 C26.232,58.46,23.013,59.827,20.316,59.827z M43.684,8.179c-2.234,0-5.079,1.239-8.17,3.613c-4.6,3.532-9.23,9.11-13.04,15.708 c-3.809,6.598-6.324,13.396-7.084,19.146c-0.709,5.371,0.243,9.234,2.61,10.602s6.187,0.26,10.486-3.04 c4.6-3.532,9.23-9.11,13.04-15.708c3.809-6.598,6.324-13.396,7.084-19.146c0.709-5.371-0.243-9.234-2.61-10.602l0,0 C45.336,8.368,44.556,8.179,43.684,8.179z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M43.684,59.827c-2.696,0-5.916-1.367-9.388-4.032c-4.803-3.688-9.617-9.476-13.555-16.295 c-3.937-6.819-6.541-13.881-7.334-19.885C12.575,13.311,13.851,8.838,17,7.02c3.15-1.816,7.661-0.686,12.704,3.186 c4.803,3.688,9.617,9.476,13.555,16.295c3.937,6.819,6.541,13.881,7.334,19.885C51.425,52.689,50.149,57.162,47,58.98 C46.019,59.547,44.904,59.827,43.684,59.827z M20.316,8.179c-0.873,0-1.651,0.189-2.316,0.573l0,0 c-2.367,1.367-3.319,5.23-2.61,10.602c0.76,5.75,3.275,12.549,7.084,19.146c3.81,6.598,8.44,12.176,13.04,15.708 c4.298,3.3,8.119,4.407,10.486,3.04s3.319-5.23,2.61-10.602c-0.76-5.75-3.275-12.549-7.084-19.146 c-3.81-6.598-8.44-12.176-13.04-15.708C25.396,9.419,22.551,8.179,20.316,8.179z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M10.463,46.972c-0.044,0-0.088-0.003-0.133-0.009l-1.982-0.264 c-0.548-0.073-0.933-0.575-0.859-1.123c0.072-0.548,0.572-0.933,1.123-0.859l1.982,0.264c0.548,0.073,0.933,0.575,0.859,1.123 C11.387,46.606,10.957,46.972,10.463,46.972z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M8.194,51.885c-0.536,0-0.98-0.426-0.998-0.967c-0.019-0.552,0.413-1.014,0.966-1.032 l1.998-0.067c0.551-0.037,1.015,0.413,1.033,0.966c0.019,0.552-0.413,1.014-0.966,1.032l-1.999,0.067 C8.218,51.885,8.206,51.885,8.194,51.885z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M9.009,57.093c-0.429,0-0.825-0.277-0.956-0.708c-0.161-0.528,0.136-1.087,0.664-1.248 l1.913-0.584c0.53-0.166,1.088,0.136,1.248,0.664c0.162,0.528-0.136,1.087-0.664,1.248l-1.913,0.584 C9.203,57.079,9.105,57.093,9.009,57.093z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M11.552,61.852c-0.281,0-0.561-0.118-0.759-0.349c-0.359-0.419-0.312-1.051,0.107-1.41 l1.518-1.303c0.418-0.358,1.049-0.312,1.41,0.107c0.359,0.419,0.312,1.051-0.107,1.41l-1.518,1.303 C12.015,61.772,11.783,61.852,11.552,61.852z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M55.771,18.718c-0.02,0-0.039-0.001-0.059-0.002l-1.996-0.115 c-0.552-0.031-0.973-0.504-0.94-1.056c0.031-0.551,0.507-0.971,1.056-0.94l1.996,0.115c0.552,0.031,0.973,0.504,0.94,1.056 C56.737,18.307,56.296,18.718,55.771,18.718z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M53.591,13.797c-0.487,0-0.913-0.355-0.988-0.852c-0.082-0.546,0.295-1.056,0.841-1.138 l1.978-0.297c0.548-0.072,1.056,0.296,1.138,0.841c0.082,0.546-0.295,1.056-0.841,1.138l-1.978,0.297 C53.69,13.793,53.64,13.797,53.591,13.797z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M52.215,9.336c-0.36,0-0.708-0.194-0.887-0.536c-0.257-0.488-0.067-1.093,0.422-1.35l1.771-0.929 c0.488-0.256,1.093-0.068,1.35,0.422c0.257,0.488,0.067,1.093-0.422,1.35l-1.771,0.929C52.53,9.299,52.371,9.336,52.215,9.336z"
      ></path>
      <path
        fill="#8d6c9f"
        d="M49.266,5.919c-0.2,0-0.402-0.06-0.578-0.185c-0.45-0.32-0.556-0.944-0.236-1.395l1.158-1.631 c0.32-0.45,0.943-0.557,1.395-0.236c0.45,0.32,0.556,0.944,0.236,1.395l-1.158,1.631C49.887,5.772,49.579,5.919,49.266,5.919z"
      ></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
      ></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
      <polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon>
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      ></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path
        fill="#F44336"
        d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
      ></path>
      <path
        fill="#F44336"
        d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
      ></path>
      <g>
        <path
          fill="#1565C0"
          d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
        ></path>
        <path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path>
        <path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path>
        <path
          fill="#1565C0"
          d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
        ></path>
        <path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path>
      </g>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path
        fill="#8bc34a"
        d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
      ></path>
      <path
        fill="#fff"
        d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
      ></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
      <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path
        fill="#37474f"
        d="M36.272,36.185l-7.243-12.184l7.243-12.221l3.502,12.221L36.272,36.185z M20.126,34.994l-9.115-8.991	H25.52l7.254,12.153L20.126,34.994z M20.126,12.934l12.611-3.162l-7.254,12.231H10.975L20.126,12.934z M38.653,3.782L22.172,8.061	l-2.455,4.204l-4.947-0.037L2.75,24.001l12.019,11.737l4.948-0.037l2.455,4.204l16.481,4.315l4.426-16.176l-2.478-4.04l2.477-4.047	L38.653,3.782z"
      ></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#434345" d="M28,14c1.657,0,3,0,3-1c0-3-2-5-4-5c-1.657,0-3,1-3,3C24,12.657,26.343,14,28,14z"></path>
      <path
        fill="#434345"
        d="M42.667,39.377L39.92,34.23C39.862,34.133,34.472,24.463,24,25c1.679-1.831,2.791-2.518,3.99-3.7 c0.569,0.322,1.106,0.564,1.53,0.62c0.43,0.06,0.84,0.09,1.23,0.09c0.91,0,1.71-0.16,2.46-0.43c1.88-0.68,3.13-1.72,3.74-3.11 c0.33-0.74,0.27-1.57-0.17-2.27c-0.44-0.71-1.19-1.15-2.02-1.19c-1.51-0.09-2.51,0.75-3.94,1.66c-0.33,0.21-0.76,0.22-1.09,0 C27.98,15.48,24.43,14.1,19,15c-4.17,0.69-7.62,4.7-9.15,6.77c-0.53,0.71,0.07,1.74,0.95,1.58c0.77-0.14,1.73-0.49,2.86-0.89 c0.8-0.28,1.34-1.04,1.34-1.88V20c0-1,1-2.19,3-3c1.8-0.54,4,0,6.73,2c0.44,0.346,1,0.782,1.593,1.211 c-1.34,1.331-3.074,3.108-4.882,5.113C14.259,26.432,5,32.509,5,37c0,2,1.593,2.184,3,2c5.891,0,10.382-6.969,10.613-7.277 c0.222-0.289,0.451-0.576,0.679-0.864c8.447-1.662,14.099,1.147,15.988,2.091c1.14,0.57,1.04,0.96,0.86,1.68 C36.07,34.9,36,35.19,36,35.5c0,1.897,3.682,4.219,5.369,5.161c0.371,0.207,0.831,0.139,1.132-0.162 C42.797,40.203,42.865,39.747,42.667,39.377z M36,17c-1,2-4,1-4,1S34,16,36,17z M8.989,36.999 c-0.867,0.227-1.534-0.779-1.049-1.533c1.928-2.997,7.35-4.53,9.123-4.92C17.019,30.605,12.581,36.057,8.989,36.999z"
      ></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path
        fill="#01579B"
        d="M34.932,22.478C33.769,21.56,32.206,21.001,30.5,21c-1.706,0.001-3.27,0.56-4.433,1.478 c-1.184,0.935-1.969,2.252-2.059,3.747c-0.091,1.536,0.57,2.965,1.732,4.023C26.925,31.324,28.613,32,30.501,32 c1.887,0,3.574-0.676,4.757-1.753c1.162-1.057,1.824-2.486,1.734-4.023C36.902,24.731,36.116,23.413,34.932,22.478z"
      ></path>
      <path
        fill="#FF6D00"
        d="M45.871,25.932c-0.259-1.823-0.891-3.535-1.861-5.095c-0.891-1.433-2.035-2.688-3.397-3.745l0.002-0.002 l-0.037-0.012c-0.028-0.025-0.05-0.054-0.079-0.078L26.249,6.438c-0.86-0.689-2.12-0.552-2.811,0.313 c-0.69,0.862-0.551,2.121,0.313,2.811L29.739,14H10.5C9.125,14,8,15.125,8,16.5S9.125,19,10.5,19h7.154L2.873,31.602 c-1.048,0.898-1.17,2.478-0.271,3.525C3.097,35.704,3.797,36,4.501,36c0.576,0,1.154-0.198,1.626-0.602l8.954-7.675 c-0.022,0.807-0.039,1.538-0.035,1.761C15.046,33,19,42,30.682,42c8.318,0,15.28-5,15.28-13.261 C46.034,27.805,46.003,26.867,45.871,25.932z M39.525,29.153c-0.401,1.087-1.05,2.104-1.935,2.992 c-1.81,1.82-4.343,2.85-7.088,2.854c-2.745,0.005-5.28-1.017-7.091-2.832c-0.885-0.885-1.535-1.901-1.937-2.986 c-0.392-1.065-0.545-2.195-0.444-3.335c0.098-1.116,0.432-2.179,0.971-3.141c0.529-0.946,1.257-1.8,2.154-2.524 c1.76-1.414,3.999-2.179,6.345-2.182c2.346-0.003,4.584,0.756,6.345,2.164c0.897,0.72,1.624,1.571,2.152,2.515 c0.539,0.961,0.874,2.023,0.973,3.138C40.07,26.958,39.918,28.087,39.525,29.153z"
      ></path>
    </svg>,
  ];

  const [trailsBonce, trailsBonceApi] = useTrail(icons.length, () => ({
    from: { opacity: 0, x: 20, height: 0 },
    config: { mass: 5, tension: 2000, friction: 200, duration: 300 },
  }));

  useEffect(() => {
    console.log(inViewApi);
    if (inViewApi) {
      trailsApi.start({
        opacity: 1,
        x: 0,
        height: 50,
      });

      trailsBonceApi.start({
        opacity: 1,
        x: 0,
        height: 50,
      });
    } else {
      trailsApi.start({
        opacity: 0,
        x: 20,
        height: 0,
      });

      trailsBonceApi.start({
        opacity: 0,
        x: 20,
        height: 0,
      });
    }
  }, [inViewApi, trailsApi, trailsBonceApi]);
  return (
    <animated.div id={"containerAboutMe"} ref={divToAnimated} style={{ width: "70vh", height: "50vh", ...divAnimated }}>
      <div ref={refUseInView}>
        {trails.map((animationStyle, index) => {
          return (
            <animated.p key={index} style={{ ...animationStyle }} className={"textP"}>
              {items[index]}
            </animated.p>
          );
        })}
      </div>

      <animated.div>
        <animated.p style={{ ...trailsApi }}>
          <strong>My tools:</strong>
        </animated.p>

        <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {trailsBonce.map((animationBounceStyle, index) => (
            <animated.div key={index} style={{ ...animationBounceStyle, marginBottom: "40px" }}>
              {icons[index]}
            </animated.div>
          ))}
        </div>

        {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
          <ellipse cx="32" cy="61" opacity=".3" rx="20" ry="3"></ellipse>
          <path
            fill="#ffce29"
            d="M54,20v24c0,2.25-0.74,4.32-2,5.99V50c-1.69,2.24-4.29,3.75-7.25,3.97C44.51,53.99,44.25,54,44,54 H20c-5.52,0-10-4.48-10-10V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01c1.67-1.26,3.74-2,5.99-2h24 C49.52,10,54,14.48,54,20z"
          ></path>
          <path
            fill="#fff"
            d="M14.01,12H14c-2.24,1.69-3.75,4.29-3.97,7.25C10.01,19.49,10,19.75,10,20v12 c2.761,0,5-2.239,5-5v-7c0-0.108,0.003-0.221,0.017-0.38c0.102-1.375,0.778-2.65,1.862-3.525c0.048-0.033,0.095-0.068,0.142-0.103 C17.881,15.343,18.911,15,20,15h6c2.761,0,5-2.239,5-5H20C17.75,10,15.68,10.74,14.01,12z"
            opacity=".3"
          ></path>
          <path d="M54,44V28c-2.761,0-5,2.238-5,5v11c0,2.757-2.243,5-5,5H33c-2.761,0-5,2.238-5,5h16 C49.523,54,54,49.523,54,44z" opacity=".15"></path>
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            d="M13.5,23.5V20c0-0.153,0.005-0.312,0.018-0.459c0.135-1.809,1.003-3.46,2.396-4.594l0.204-0.152"
          ></path>
          <g>
            <path
              fill="#9c34c2"
              d="M28.441,47.566c-0.453,0.013-0.807-0.106-1.061-0.36c-0.253-0.253-0.38-0.58-0.38-0.981 c0-0.306,0.09-0.574,0.271-0.802c0.179-0.227,0.443-0.352,0.791-0.38l0.58-0.041c1.069-0.065,1.602-0.628,1.602-1.682v-8.632 c0-0.507,0.134-0.898,0.401-1.172c0.267-0.274,0.647-0.411,1.143-0.411c1.04,0,1.561,0.528,1.561,1.583v8.593 c0,2.657-1.402,4.072-4.207,4.246L28.441,47.566z"
            ></path>
            <path
              fill="#9c34c2"
              d="M41.219,47.626c-0.854,0-1.71-0.093-2.564-0.28c-0.854-0.186-1.596-0.46-2.223-0.821 c-0.373-0.2-0.608-0.469-0.701-0.81c-0.093-0.341-0.073-0.672,0.06-0.993c0.134-0.319,0.347-0.546,0.641-0.68 c0.293-0.134,0.647-0.101,1.061,0.099c0.535,0.308,1.13,0.535,1.783,0.681c0.654,0.147,1.302,0.22,1.943,0.22 c0.962,0,1.653-0.15,2.073-0.45c0.421-0.302,0.631-0.678,0.631-1.133c0-0.386-0.147-0.694-0.44-0.921 c-0.295-0.227-0.808-0.421-1.544-0.58l-2.262-0.481c-2.523-0.535-3.786-1.843-3.786-3.926c0-0.893,0.241-1.679,0.722-2.354 c0.481-0.673,1.151-1.198,2.013-1.571c0.861-0.373,1.858-0.561,2.994-0.561c0.747,0,1.482,0.09,2.202,0.271 c0.722,0.179,1.356,0.443,1.904,0.791c0.333,0.2,0.541,0.461,0.621,0.781c0.08,0.321,0.057,0.628-0.07,0.923 c-0.127,0.293-0.341,0.5-0.641,0.619c-0.302,0.121-0.672,0.075-1.112-0.14c-0.442-0.227-0.91-0.393-1.403-0.5 c-0.494-0.106-1.001-0.16-1.522-0.16c-0.841,0-1.491,0.163-1.953,0.491c-0.46,0.328-0.691,0.751-0.691,1.271 c0,0.388,0.14,0.701,0.422,0.942c0.28,0.24,0.768,0.434,1.462,0.58l2.262,0.481c2.59,0.561,3.886,1.83,3.886,3.806 c0,0.88-0.238,1.653-0.711,2.313c-0.474,0.662-1.143,1.175-2.003,1.542C43.413,47.442,42.395,47.626,41.219,47.626z"
            ></path>
          </g>
        </svg> */}
      </animated.div>
    </animated.div>
  );
};