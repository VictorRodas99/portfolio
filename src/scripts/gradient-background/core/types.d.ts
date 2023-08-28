/* Complement interfaces and types */
export interface CommonUniforms {
  projectionMatrix: Uniform
  modelViewMatrix: Uniform
  resolution: Uniform
  aspectRatio: Uniform
}

export interface AttributeOptions {
  type?: number
  size: number
  normalized?: boolean
  buffer?: WebGLBuffer | null
  values?: Float32Array | Uint16Array
  target: AttributeTarget
}

interface MaterialUniform {
  type: ShaderType
  value: any
}

export type UniformTypeFn = '1f' | '1i' | '2fv' | '3fv' | '4fv' | 'Matrix4fv'
export type ShaderType = 'float' | 'int' | 'vec2' | 'vec3' | 'vec4' | 'mat4'
export type UniformType = ShaderType | 'array' | 'struct' | 'vertex' | 'fragment'
export type AttributeTarget = WebGLRenderingContext['ARRAY_BUFFER'] | WebGLRenderingContext['ELEMENT_ARRAY_BUFFER']


/* Inner class constructors */
export interface MaterialConstructor {
  new(
    vertexShaders: string,
    fragments: string,
    uniforms?: Record<string, MaterialUniform | Uniform>
  ): Material
}

export interface UniformConstructor {
  new(options: {
    type?: UniformType
    value?: any
    transpose?: boolean
    excludeFrom?: string
  }): Uniform;
}

export interface PlaneGeometryConstructor {
  new(
    width?: number, heigth?: number,
    xSegCount?: number, ySegCount?: number,
    orientation?: string
  ): PlaneGeometry
}

export interface MeshConstructor {
  new(
    geometry: PlaneGeometry, material: Material
  ): Mesh
}

export interface AttributeConstructor {
  new(options: AttributeOptions): Attribute
}


/* Inner classes  */
export interface Material {
  uniforms: { u_time: { value: number } }
  uniformInstances: { uniform: Uniform, location: WebGLUniformLocation | null }[]
  vertexSource: string
  fragmentSource: string
  vertexShader: WebGLShader
  fragmentShader: WebGLShader
  program: WebGLProgram
  attachUniforms(name: string | undefined, uniforms: CommonUniforms)
  getShaderByType(type: number, source: string): WebGLShader
  getUniformVariableDeclarations(
    uniforms: Record<string, Uniform> | CommonUniforms, type: UniformType
  ): string
}

export interface Uniform {
  type?: UniformType
  value?: any
  transpose?: boolean
  excludeFrom?: string
  getTypeFunction(): UniformTypeFn
  getDeclaration: (name: string, type: UniformType) => string
  update(value?)
}

export interface PlaneGeometry {
  width: number
  height: number
  xSegCount: number
  ySegCount: number
  vertexCount: number
  quadCount: number
  orientation: string
  attributes: {
    position: Attribute
    uv: Attribute
    uvNorm: Attribute
    index: Attribute
  };
  setTopology(xSegCount?: number, ySegCount?: number): void
  setSize(width?: number, height?: number, orientation?: string): void
}

export interface Mesh {
  geometry: PlaneGeometry
  material: Material
  wireframe: boolean
  attributeInstances: { attribute: Attribute, location: number }[]
  draw(): void
  remove(): void
}

export interface Attribute implements AttributeOptions {
  buffer: WebGLBuffer,
  normalized: boolean,
  size: number,
  target: number,
  type: number,
  value: Uint16Array | Float32Array
  values: Float32Array | Uint16Array
  update(): void
  attach(attributeName: string, program: WebGLProgram): number
  use(location: number): void
}


/* Main Class */
export interface MiniGLConstructor {
  new(
    canvas: HTMLCanvasElement,
    width: number | null,
    height: number | null,
    debug?: boolean
  ): MiniGLInterface
}

export interface MiniGLInterface {
  setSize(width?: number, height?: number): void
  setOrthographicCamera(
    left?: number, right?: number,
    top?: number, bottom?: number, near?: number
  )
  render(): void
}
