import { RouteComponentProps } from "@reach/router";
import React, { useLayoutEffect } from "react";
import Body from "../../body/containers/Body";
import MovingBackground from "./MovingBackground";
import {ParallaxProvider, useController} from 'react-scroll-parallax';
import './Home.scss';

export type HomeProps = {
    background:string,
} & RouteComponentProps;

const ParallaxCache = () => {
    const { parallaxController } = useController();
    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => {
            window.removeEventListener('load', handler);
        };
    }, [parallaxController]);
    return null;
  }
  
export default function Home({background}:HomeProps) {
    return (<div className="Home">
        <ParallaxProvider>
            <ParallaxCache />
            <Body />
        </ParallaxProvider>
      </div>);
}