(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const r="/assets/img_head-CtIPouP0.png",c="/assets/img_tail-Dyxh5Zml.png";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".div__coin-img"),o=document.querySelector(".img_coin"),a=document.querySelector(".btn__flip"),i=document.querySelector(".result");a&&n&&i&&a.addEventListener("click",()=>{console.log("Button clicked, starting animation"),n.classList.remove("animate__animated","animate__bounceInDown","animate__flipInX","animate__bounceOutUp"),n.offsetWidth,n.classList.add("animate__animated","animate__flipInX"),setTimeout(()=>{Math.random()>.5?(o.src=r,o.alt="Coin head side",console.log("Image changed to head"),i.textContent="Heads"):(o.src=c,o.alt="Coin tail side",console.log("Image changed to tail"),i.textContent="Tails")},2500),n.addEventListener("animationend",e=>{console.log(`Animation ended: ${e.animationName}`),e.animationName==="flipInX"&&(n.classList.remove("animate__flipInX"),n.classList.add("animate__bounceOutUp"),n.addEventListener("animationend",t=>{t.animationName==="bounceOutUp"&&(n.classList.remove("animate__bounceOutUp"),n.classList.add("animate__bounceInDown"))},{once:!0}))},{once:!0})})});