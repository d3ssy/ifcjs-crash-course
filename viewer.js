import { projects } from "./project-data.js";

import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../wasm/");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

//get current url
const currentUrl = new URL(window.location.href);
console.log(`current url: ${currentUrl}`)

//get url parameter projectId
const projectId = currentUrl.searchParams.get("projectId");
console.log(`current projectId: ${projectId}`)

//filter project from projects by projectId
const project = projects.find(project => project.id === parseInt(projectId));
console.log(`current project: ${project}`);

//get project url
const modelUrl = project.url;
console.log(`model url: ${modelUrl}`);

//load model
loadIfc(modelUrl);


