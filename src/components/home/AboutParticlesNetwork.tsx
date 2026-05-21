import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse";

let engineReady = false;

const particleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: { value: 90, density: { enable: true, width: 900, height: 900 } },
    color: { value: ["#4CAF50", "#81C784", "#ffffff"] },
    opacity: { value: { min: 0.6, max: 0.8 } },
    size: { value: { min: 1, max: 4 } },
    links: {
      enable: true,
      distance: 150,
      color: "#81C784",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: { min: 0.35, max: 0.9 },
      direction: "none",
      random: true,
      outModes: { default: "bounce" },
    },
  },
  interactivity: {
    detectsOn: "#about-preview",
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: false },
    },
    modes: {
      repulse: {
        distance: 180,
        duration: 0.8,
        speed: 1.2,
        factor: 1.2,
      },
    },
  },
};

export function AboutParticlesNetwork() {
  const [ready, setReady] = useState(engineReady);

  useEffect(() => {
    if (engineReady) {
      setReady(true);
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadExternalRepulseInteraction(engine);
    }).then(() => {
      engineReady = true;
      setReady(true);
    });
  }, []);

  const options = useMemo(() => particleOptions, []);

  return (
    <>
      <div className="about-particles-gradient" aria-hidden />
      {ready && (
        <Particles
          id="about-particles-network"
          className="about-particles-canvas"
          options={options}
        />
      )}
    </>
  );
}
