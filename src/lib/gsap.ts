import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Plaginlarni bir marta ro'yxatdan o'tkazamiz; hamma joyda shu fayldan import qiling.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
