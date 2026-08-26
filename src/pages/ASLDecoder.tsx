import ProjectLayout from '../components/project/ProjectLayout';
import { aslDecoder } from '../data/pages/aslDecoder';

export default function ASLDecoder() {
  return <ProjectLayout spec={aslDecoder} />;
}
