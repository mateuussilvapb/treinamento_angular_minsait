import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading',
  template: `
    <div class="overlay">
      <div class="loading">
        <svg viewBox="0 0 240 240" height="240" width="240" class="pl">
          <circle
            stroke-linecap="round"
            stroke-dashoffset="-330"
            stroke-dasharray="0 660"
            stroke-width="20"
            stroke="#000"
            fill="none"
            r="105"
            cy="120"
            cx="120"
            class="pl__ring pl__ring--a"
          ></circle>
          <circle
            stroke-linecap="round"
            stroke-dashoffset="-110"
            stroke-dasharray="0 220"
            stroke-width="20"
            stroke="#000"
            fill="none"
            r="35"
            cy="120"
            cx="120"
            class="pl__ring pl__ring--b"
          ></circle>
          <circle
            stroke-linecap="round"
            stroke-dasharray="0 440"
            stroke-width="20"
            stroke="#000"
            fill="none"
            r="70"
            cy="120"
            cx="85"
            class="pl__ring pl__ring--c"
          ></circle>
          <circle
            stroke-linecap="round"
            stroke-dasharray="0 440"
            stroke-width="20"
            stroke="#000"
            fill="none"
            r="70"
            cy="120"
            cx="155"
            class="pl__ring pl__ring--d"
          ></circle>
        </svg>
      </div>
    </div>
  `,
  styles: [
    `
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000000;
      }

      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .pl {
        width: 6em;
        height: 6em;
      }

      .pl__ring {
        animation: ringA 2s linear infinite;
      }

      .pl__ring--a {
        stroke: #f42f25;
      }

      .pl__ring--b {
        animation-name: ringB;
        stroke: #ffdd00;
      }

      .pl__ring--c {
        animation-name: ringC;
        stroke: #255ff4;
      }

      .pl__ring--d {
        animation-name: ringD;
        stroke: #2cf425;
      }

      /* Animations */
      @keyframes ringA {
        from,
        4% {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -330;
        }

        12% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -335;
        }

        32% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -595;
        }

        40%,
        54% {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -660;
        }

        62% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -665;
        }

        82% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -925;
        }

        90%,
        to {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -990;
        }
      }

      @keyframes ringB {
        from,
        12% {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -110;
        }

        20% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -115;
        }

        40% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -195;
        }

        48%,
        62% {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }

        70% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }

        90% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -305;
        }

        98%,
        to {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -330;
        }
      }

      @keyframes ringC {
        from {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: 0;
        }

        8% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -5;
        }

        28% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -175;
        }

        36%,
        58% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }

        66% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }

        86% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -395;
        }

        94%,
        to {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -440;
        }
      }

      @keyframes ringD {
        from,
        8% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: 0;
        }

        16% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -5;
        }

        36% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -175;
        }

        44%,
        50% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }

        58% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }

        78% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -395;
        }

        86%,
        to {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -440;
        }
      }
    `,
  ],
  standalone: true,
  imports: [ProgressSpinnerModule],
})
export class LoadingComponent {}
