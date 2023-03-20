import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react'

import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    GammaCorrectionPlugin,
    BloomPlugin,
    mobileAndTabletCheck
} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);



function WebgiViewer() {
    const canvasRef = useRef(null);


    const memoizedScrollAnimation = useCallback((position, target, onUpdate) => {
        if(position && target && onUpdate){
            scrollAnimation(position, target, onUpdate);
        }
    },[])

    const setupViewer = useCallback(async () => {
        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin);


        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;
        console.log(camera, position, target);
        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)

        // This must be called once after all plugins are added.
        viewer.renderer.refreshPipeline()

        await manager.addFromPath("scene-black.glb");

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });


        window.scrollTo(0, 0);

        let needsUpdate = true;


        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener('preFrame', () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            };
            // console.log(camera, position, target);
        })
        memoizedScrollAnimation(position,target,onUpdate);

        // Load an environment map if not set in the glb file
        // await viewer.scene.setEnvironment(
        //     await manager.importer!.importSinglePath<ITexture>(
        //         "./assets/environment.hdr"
        //     )
        // );
    }, []);


    useEffect(() => {
        setupViewer();
    }, [])

    return (
        <div id='webgi-canvas-container'>
            <canvas id='webgi-canvas' ref={canvasRef} />
        </div>
    )
}

export default WebgiViewer
