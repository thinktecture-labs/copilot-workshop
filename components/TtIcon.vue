<script setup lang="ts">
type TtIconNameSvg =
  | 'ai-agent'
  | 'air-force'
  | 'api'
  | 'army-land-forces-01'
  | 'army-land-forces-02'
  | 'army-land-forces-03'
  | 'audio'
  | 'bar-chart-01'
  | 'batch-processing'
  | 'bounding-box-grid'
  | 'bundeswehr-coat-of-arms'
  | 'caching'
  | 'chain-of-thought'
  | 'chat'
  | 'checklist'
  | 'checkpoint'
  | 'chip-processor-cpu-gpu-npu'
  | 'chunking'
  | 'classified-information'
  | 'cli-icons'
  | 'clipboard'
  | 'cloud-crossed'
  | 'coalition-multi-national-operations'
  | 'code-01'
  | 'code-02'
  | 'command-control-center'
  | 'context-window'
  | 'csv-document'
  | 'cycle-01'
  | 'cycle-02'
  | 'dashboard'
  | 'dataset'
  | 'decision-nodes'
  | 'document'
  | 'document-chunks'
  | 'drone-uav'
  | 'embedding'
  | 'encryption-military-encription-01'
  | 'encryption-military-encription-02'
  | 'evaluation'
  | 'event-sequence-01'
  | 'event-sequence-02'
  | 'exact-search'
  | 'extraction-data-extraction'
  | 'few-shot-prompting'
  | 'filter'
  | 'fine-tuning'
  | 'fork-routing-01'
  | 'fork-routing-02'
  | 'form'
  | 'fuzzy-search'
  | 'graphics-card-gpu'
  | 'grid'
  | 'hallucination'
  | 'hub-spoke'
  | 'image-picture-01'
  | 'image-picture-02'
  | 'intelligence-humint'
  | 'json-document'
  | 'knowledge-base'
  | 'layers'
  | 'llm-language-model'
  | 'llm-response-01'
  | 'llm-response-02'
  | 'logistics-supply-chain-military-01'
  | 'logistics-supply-chain-military-02'
  | 'map-geographical-intelligence'
  | 'markdown-document'
  | 'memory'
  | 'microphone'
  | 'multi-agent-system'
  | 'nato-logo-01'
  | 'nato-logo-02'
  | 'navy'
  | 'network'
  | 'neural-network'
  | 'neural-processing-unit-npu'
  | 'ocr'
  | 'pdf-document'
  | 'pdf-with-text-layer'
  | 'pdf-without-text-layer'
  | 'planning'
  | 'pptx-file'
  | 'pre-training'
  | 'process-flow'
  | 'prompt-template'
  | 'protocol-layers'
  | 'radar-air-defense'
  | 'rag-retrieval-augmented-generation'
  | 'react-loop'
  | 'rlhf'
  | 'robot'
  | 'search'
  | 'semantic-search'
  | 'sources'
  | 'space-forces'
  | 'speaker-01'
  | 'speaker-02'
  | 'speaker-03'
  | 'speaker-04'
  | 'streaming'
  | 'structured-output'
  | 'system-prompt'
  | 'threat-assessment'
  | 'timeline'
  | 'token'
  | 'tool-use-function-calling'
  | 'toolbox'
  | 'transformer'
  | 'two-panels'
  | 'vector'
  | 'vector-database'
  | 'video-01'
  | 'voice-text-image-inputs'
  | 'warning'
  | 'websocket-hands-on'
  | 'workshop-hands-on'
  | 'wrench'
  | 'xlsx-document'
  | 'xml-document'
  | 'yaml-document'

type TtIconNamePng =
  | 'admin'
  | 'bitcoin-token'
  | 'block'
  | 'blockchain-1'
  | 'blockchain-2'
  | 'blockchain-3'
  | 'blockchain-4'
  | 'blockchain-5'
  | 'browser'
  | 'clock'
  | 'cloud'
  | 'crypto-token'
  | 'datenbank'
  | 'desktop'
  | 'download-1'
  | 'download-2'
  | 'download-3'
  | 'ether-token'
  | 'file'
  | 'firewall-a'
  | 'firewall-b'
  | 'folder'
  | 'funk-kreditkarte'
  | 'funk-smartphone'
  | 'funk-smartwatch'
  | 'funk-tablet'
  | 'gamepad'
  | 'gears'
  | 'globus'
  | 'hyperlink'
  | 'key'
  | 'kreditkarte'
  | 'lupe'
  | 'message'
  | 'message-queue'
  | 'microcontroller'
  | 'notebook'
  | 'offline-1'
  | 'offline-2'
  | 'online-1'
  | 'online-2'
  | 'printer'
  | 'progressive'
  | 'push-notification'
  | 'rechen-zentrum'
  | 'responsive'
  | 'schloss-closed'
  | 'schloss-open'
  | 'schloss-zu-ok'
  | 'server'
  | 'signatur'
  | 'signierte-nachricht'
  | 'smart-contract'
  | 'smartphone'
  | 'smartwatch'
  | 'tablet'
  | 'tasse'
  | 'token'
  | 'touch'
  | 'update'
  | 'user'
  | 'user-group'
  | 'usergroup'
  | 'userin'
  | 'verschlsselte-nachricht'
  | 'verschlsselte-und-signierte-nachricht'
  | 'windows-chrome'

type TtIconName = TtIconNameSvg | TtIconNamePng

type TtIconColor = 'black' | 'red' | 'gray' | 'blue'

const svgIcons = new Set<TtIconName>([
  'ai-agent',
  'air-force',
  'api',
  'army-land-forces-01',
  'army-land-forces-02',
  'army-land-forces-03',
  'audio',
  'bar-chart-01',
  'batch-processing',
  'bounding-box-grid',
  'bundeswehr-coat-of-arms',
  'caching',
  'chain-of-thought',
  'chat',
  'checklist',
  'checkpoint',
  'chip-processor-cpu-gpu-npu',
  'chunking',
  'classified-information',
  'cli-icons',
  'clipboard',
  'cloud-crossed',
  'coalition-multi-national-operations',
  'code-01',
  'code-02',
  'command-control-center',
  'context-window',
  'csv-document',
  'cycle-01',
  'cycle-02',
  'dashboard',
  'dataset',
  'decision-nodes',
  'document',
  'document-chunks',
  'drone-uav',
  'embedding',
  'encryption-military-encription-01',
  'encryption-military-encription-02',
  'evaluation',
  'event-sequence-01',
  'event-sequence-02',
  'exact-search',
  'extraction-data-extraction',
  'few-shot-prompting',
  'filter',
  'fine-tuning',
  'fork-routing-01',
  'fork-routing-02',
  'form',
  'fuzzy-search',
  'graphics-card-gpu',
  'grid',
  'hallucination',
  'hub-spoke',
  'image-picture-01',
  'image-picture-02',
  'intelligence-humint',
  'json-document',
  'knowledge-base',
  'layers',
  'llm-language-model',
  'llm-response-01',
  'llm-response-02',
  'logistics-supply-chain-military-01',
  'logistics-supply-chain-military-02',
  'map-geographical-intelligence',
  'markdown-document',
  'memory',
  'microphone',
  'multi-agent-system',
  'nato-logo-01',
  'nato-logo-02',
  'navy',
  'network',
  'neural-network',
  'neural-processing-unit-npu',
  'ocr',
  'pdf-document',
  'pdf-with-text-layer',
  'pdf-without-text-layer',
  'planning',
  'pptx-file',
  'pre-training',
  'process-flow',
  'prompt-template',
  'protocol-layers',
  'radar-air-defense',
  'rag-retrieval-augmented-generation',
  'react-loop',
  'rlhf',
  'robot',
  'search',
  'semantic-search',
  'sources',
  'space-forces',
  'speaker-01',
  'speaker-02',
  'speaker-03',
  'speaker-04',
  'streaming',
  'structured-output',
  'system-prompt',
  'threat-assessment',
  'timeline',
  'token',
  'tool-use-function-calling',
  'toolbox',
  'transformer',
  'two-panels',
  'vector',
  'vector-database',
  'video-01',
  'voice-text-image-inputs',
  'warning',
  'websocket-hands-on',
  'workshop-hands-on',
  'wrench',
  'xlsx-document',
  'xml-document',
  'yaml-document',
])

const colorMap: Record<TtIconColor, string> = {
  black: 'var(--tt-black)',
  red: 'var(--tt-red)',
  gray: 'var(--tt-gray)',
  blue: 'var(--tt-blue)',
}

const props = withDefaults(
  defineProps<{
    name: TtIconName
    color?: TtIconColor
    size?: string
  }>(),
  {
    color: 'black',
    size: '80px',
  },
)
</script>

<template>
  <span
    v-if="svgIcons.has(props.name)"
    class="tt-icon tt-icon-svg"
    role="img"
    :aria-label="props.name"
    :style="{
      width: props.size,
      height: props.size,
      backgroundColor: colorMap[props.color],
      maskImage: `url(/icons/${props.name}.svg)`,
      WebkitMaskImage: `url(/icons/${props.name}.svg)`,
    }"
  />
  <img
    v-else
    :src="`/icons/${props.color}/${props.name}.png`"
    :alt="props.name"
    class="tt-icon tt-icon-png"
    :style="{ width: props.size, height: props.size }"
  />
</template>

<style scoped>
.tt-icon {
  display: inline-block;
  vertical-align: middle;
}
.tt-icon-svg {
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}
.tt-icon-png {
  object-fit: contain;
}
</style>
