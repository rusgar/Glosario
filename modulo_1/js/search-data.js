const SEARCH_INDEX_DATA = [
  {
    "number": 1,
    "title": "Machine Learning",
    "description": "Disciplina dentro de la IA que permite a los sistemas aprender patrones a partir de datos sin ser pr...",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 2,
    "title": "Deep Learning",
    "description": "Subcampo del Machine Learning basado en redes neuronales profundas con múltiples capas que permiten ...",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_profundo",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 3,
    "title": "Dataset",
    "description": "Conjunto estructurado de datos utilizado para entrenar o evaluar un modelo de IA....",
    "url": "https://es.wikipedia.org/wiki/Conjunto_de_datos",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 4,
    "title": "Modelo (Model)",
    "description": "Función matemática entrenada que transforma una entrada en una salida (por ejemplo, texto en otro id...",
    "url": "https://es.wikipedia.org/wiki/Modelo_estad%C3%ADstico",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 5,
    "title": "Parámetro (Parameter)",
    "description": "Valor interno ajustable dentro de un modelo que se modifica durante el entrenamiento....",
    "url": "https://es.wikipedia.org/wiki/Par%C3%A1metro_estad%C3%ADstico",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 6,
    "title": "Entrenamiento (Training)",
    "description": "Proceso mediante el cual un modelo aprende ajustando sus parámetros para minimizar el error....",
    "url": "https://es.wikipedia.org/wiki/Entrenamiento_(aprendizaje_autom%C3%A1tico)",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 7,
    "title": "Aprendizaje Supervisado (Supervised Learning)",
    "description": "Tipo de aprendizaje donde el modelo se entrena con datos etiquetados (entrada + resultado correcto)....",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_supervisado",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 8,
    "title": "Aprendizaje No Supervisado (Unsupervised Learning)",
    "description": "Aprendizaje en el que el modelo identifica patrones sin datos etiquetados....",
    "url": "https://es.wikipedia.org/wiki/Aprendizaje_no_supervisado",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 9,
    "title": "Regresión Lineal (Linear Regression)",
    "description": "Algoritmo estadístico que modela la relación lineal entre variables para hacer predicciones....",
    "url": "https://es.wikipedia.org/wiki/Regresi%C3%B3n_lineal",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 10,
    "title": "Árbol de Decisión (Decision Tree)",
    "description": "Modelo predictivo que toma decisiones mediante una estructura jerárquica en forma de árbol....",
    "url": "https://es.wikipedia.org/wiki/%C3%81rbol_de_decisi%C3%B3n",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 11,
    "title": "Redes Neuronales (Neural Networks)",
    "description": "Modelos inspirados en el cerebro humano formados por capas de nodos interconectados....",
    "url": "https://es.wikipedia.org/wiki/Red_neuronal_artificial",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 12,
    "title": "Clustering",
    "description": "Técnica de aprendizaje no supervisado que agrupa elementos similares en categorías....",
    "url": "https://es.wikipedia.org/wiki/Agrupamiento",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 13,
    "title": "PCA (Principal Component Analysis)",
    "description": "Técnica de reducción de dimensionalidad que simplifica datos manteniendo la mayor información posibl...",
    "url": "https://es.wikipedia.org/wiki/An%C3%A1lisis_de_componentes_principales",
    "page": "modulo_1/fundamentos.html",
    "pageName": "Fundamentos de IA y Machine Learning",
    "icon": "🧠"
  },
  {
    "number": 14,
    "title": "Transformers",
    "description": "Arquitectura de redes neuronales utilizada en modelos generativos modernos como ChatGPT....",
    "url": "https://es.wikipedia.org/wiki/Transformador_(modelo_de_aprendizaje_autom%C3%A1tico)",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 15,
    "title": "Espacio Latente (Latent Space)",
    "description": "Representación interna comprimida de los datos dentro de un modelo generativo....",
    "url": "https://en.wikipedia.org/wiki/Latent_space",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 16,
    "title": "Sampling (Muestreo)",
    "description": "Proceso de generación de nuevas salidas a partir de un modelo entrenado....",
    "url": "https://es.wikipedia.org/wiki/Muestreo_estad%C3%ADstico",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 17,
    "title": "Fine-tuning",
    "description": "Proceso de reajustar un modelo previamente entrenado para una tarea específica....",
    "url": "https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 18,
    "title": "ChatGPT",
    "description": "Modelo de lenguaje generativo desarrollado por OpenAI....",
    "url": "https://es.wikipedia.org/wiki/ChatGPT",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 19,
    "title": "Git",
    "description": "Hub CopilotAsistente de programación basado en IA desarrollado por GitHub en colaboración con OpenAI...",
    "url": "https://es.wikipedia.org/wiki/GitHub_Copilot",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 20,
    "title": "Midjourney",
    "description": "Herramienta de generación de imágenes mediante IA generativa....",
    "url": "https://es.wikipedia.org/wiki/Midjourney",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 21,
    "title": "Code",
    "description": "WhispererAsistente de programación basado en IA desarrollado por Amazon....",
    "url": "https://aws.amazon.com/es/codewhisperer/",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 22,
    "title": "Boilerplate",
    "description": "Código repetitivo o plantilla base reutilizable en múltiples proyectos para acelerar el desarrollo....",
    "url": "https://es.wikipedia.org/wiki/Boilerplate_code",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 23,
    "title": "Refactorización (Refactoring)",
    "description": "Proceso de reestructurar código existente sin modificar su comportamiento externo, mejorando su legi...",
    "url": "https://es.wikipedia.org/wiki/Refactorizaci%C3%B3n",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 24,
    "title": "Testing",
    "description": "Proceso de verificación y validación del funcionamiento del software....",
    "url": "https://es.wikipedia.org/wiki/Prueba_de_software",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 25,
    "title": "Testing Unitario (Unit Testing)",
    "description": "Pruebas que validan el funcionamiento de una unidad individual de código....",
    "url": "https://es.wikipedia.org/wiki/Prueba_unitaria",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 26,
    "title": "Testing de Integración (Integration Testing)",
    "description": "Pruebas que verifican la interacción entre diferentes módulos del sistema....",
    "url": "https://es.wikipedia.org/wiki/Pruebas_de_integraci%C3%B3n",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 27,
    "title": "Debugging",
    "description": "Proceso de detección y corrección de errores en el código....",
    "url": "https://es.wikipedia.org/wiki/Depuraci%C3%B3n",
    "page": "modulo_1/modelos.html",
    "pageName": "Modelos y Técnicas de ML",
    "icon": "🔬"
  },
  {
    "number": 28,
    "title": "CI/CD (Continuous Integration / Continuous Deployment)",
    "description": "Metodología que automatiza la integración, pruebas y despliegue continuo del software....",
    "url": "https://es.wikipedia.org/wiki/Integraci%C3%B3n_continua",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 29,
    "title": "Pipeline",
    "description": "Flujo automatizado de procesos dentro del ciclo de desarrollo del software....",
    "url": "https://en.wikipedia.org/wiki/Pipeline_(software)",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 30,
    "title": "Pull Request (PR)",
    "description": "Solicitud para revisar y fusionar cambios de código en un repositorio....",
    "url": "https://en.wikipedia.org/wiki/Pull_request",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 31,
    "title": "Merge",
    "description": "Acción de integrar cambios de una rama a otra en un sistema de control de versiones....",
    "url": "https://en.wikipedia.org/wiki/Merge_(version_control)",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 32,
    "title": "CodeQLHerramienta de análisis estático desarrollada por GitHub para detectar vulnerabilidades en el código.",
    "description": "CodeQLHerramienta de análisis estático desarrollada por GitHub para detectar vulnerabilidades en el ...",
    "url": "https://codeql.github.com/",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 33,
    "title": "Sonar",
    "description": "QubePlataforma de análisis estático para evaluar la calidad y seguridad del código fuente....",
    "url": "https://www.sonarsource.com/products/sonarqube/",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 34,
    "title": "SAST (Static Application Security Testing)",
    "description": "Análisis estático de seguridad aplicado al código fuente sin ejecutarlo....",
    "url": "https://en.wikipedia.org/wiki/Static_application_security_testing",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 35,
    "title": "SQL InjectionVulnerabilidad que permite ejecutar consultas maliciosas en bases de datos mediante entrada manipulada.",
    "description": "SQL InjectionVulnerabilidad que permite ejecutar consultas maliciosas en bases de datos mediante ent...",
    "url": "https://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 36,
    "title": "XSS (Cross-Site Scripting)",
    "description": "Ataque que inyecta scripts maliciosos en páginas web vistas por otros usuarios....",
    "url": "https://es.wikipedia.org/wiki/Cross-site_scripting",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 37,
    "title": "Backend",
    "description": "Parte del software que gestiona la lógica interna y el acceso a bases de datos....",
    "url": "https://es.wikipedia.org/wiki/Front_end_y_back_end",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 38,
    "title": "Frontend",
    "description": "Parte visual del software con la que interactúa el usuario....",
    "url": "https://es.wikipedia.org/wiki/Front_end_y_back_end",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 39,
    "title": "Async/",
    "description": "AwaitPatrón moderno para manejar operaciones asíncronas de forma más legible....",
    "url": "https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 40,
    "title": "Callback",
    "description": "Función que se ejecuta después de que otra función haya terminado su ejecución....",
    "url": "https://es.wikipedia.org/wiki/Callback",
    "page": "modulo_1/herramientas.html",
    "pageName": "Herramientas de IA Generativa",
    "icon": "🤖"
  },
  {
    "number": 41,
    "title": "UML (Unified Modeling Language)",
    "description": "Lenguaje estándar para modelar sistemas de software mediante diagramas estructurados....",
    "url": "https://es.wikipedia.org/wiki/Lenguaje_unificado_de_modelado",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 42,
    "title": "Embeddings",
    "description": "Representaciones numéricas (vectores) de texto o código que permiten medir similitud semántica entre...",
    "url": "https://en.wikipedia.org/wiki/Word_embedding",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 43,
    "title": "Token",
    "description": "Unidad mínima de texto que procesa un modelo (puede ser palabra, subpalabra o símbolo)....",
    "url": "https://en.wikipedia.org/wiki/Lexical_analysis#Token",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 44,
    "title": "Fill-in-the-Middle (FIM)",
    "description": "Técnica que permite completar código en medio de un bloque, no solo al final....",
    "url": "https://github.blog/ai-and-ml/github-copilot/how-github-copilot-is-getting-better-at-understanding-your-code/",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 45,
    "title": "Inline Suggestions",
    "description": "Sugerencias automáticas generadas directamente mientras el programador escribe en el editor....",
    "url": "https://docs.github.com/en/copilot",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 46,
    "title": "Prompt",
    "description": "Instrucción o texto que se proporciona a un modelo de IA para generar una respuesta....",
    "url": "https://es.wikipedia.org/wiki/Prompt_engineering",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 47,
    "title": "IDE (Integrated Development Environment)",
    "description": "Entorno de desarrollo integrado que incluye editor, compilador, depurador y otras herramientas....",
    "url": "https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 48,
    "title": "AWS (Amazon Web Services)",
    "description": "Plataforma de servicios en la nube ofrecida por Amazon....",
    "url": "https://es.wikipedia.org/wiki/Amazon_Web_Services",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 49,
    "title": "AWS ToolkitExtensión para IDEs que permite interactuar con servicios de AWS desde el entorno de desarrollo.",
    "description": "AWS ToolkitExtensión para IDEs que permite interactuar con servicios de AWS desde el entorno de desa...",
    "url": "https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/welcome.html",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 50,
    "title": "AWS Lambda",
    "description": "Servicio serverless que permite ejecutar código sin administrar servidores....",
    "url": "https://es.wikipedia.org/wiki/AWS_Lambda",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 51,
    "title": "API Gateway",
    "description": "Servicio que permite crear, publicar y gestionar APIs....",
    "url": "https://docs.aws.amazon.com/apigateway/",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 52,
    "title": "DynamoDBBase de datos NoSQL gestionada por AWS.",
    "description": "DynamoDBBase de datos NoSQL gestionada por AWS....",
    "url": "https://es.wikipedia.org/wiki/Amazon_DynamoDB",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 53,
    "title": "S3 (Simple Storage Service)",
    "description": "Servicio de almacenamiento en la nube de AWS....",
    "url": "https://es.wikipedia.org/wiki/Amazon_S3",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 54,
    "title": "IAM (Identity and Access Management)",
    "description": "Servicio de AWS para gestionar identidades y permisos....",
    "url": "https://docs.aws.amazon.com/IAM/",
    "page": "modulo_1/desarrollo.html",
    "pageName": "Desarrollo y Testing",
    "icon": "💻"
  },
  {
    "number": 55,
    "title": "SDK (Software Development Kit)",
    "description": "Conjunto de herramientas y librerías para desarrollar aplicaciones sobre una plataforma....",
    "url": "https://es.wikipedia.org/wiki/Kit_de_desarrollo_de_software",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 56,
    "title": "CRUD (Create, Read, Update, Delete)",
    "description": "Operaciones básicas en bases de datos....",
    "url": "https://es.wikipedia.org/wiki/CRUD",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 57,
    "title": "Boto3",
    "description": "SDK oficial de Python para interactuar con servicios de AWS....",
    "url": "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 58,
    "title": "Similarity Detector",
    "description": "Sistema que compara código generado con código público para detectar similitudes y posibles conflict...",
    "url": "https://docs.aws.amazon.com/codewhisperer/latest/userguide/security.html",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 59,
    "title": "Open Source",
    "description": "Software cuyo código fuente es público y puede ser modificado y redistribuido....",
    "url": "https://es.wikipedia.org/wiki/C%C3%B3digo_abierto",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 60,
    "title": "Pair Programming",
    "description": "Técnica de programación en la que dos desarrolladores trabajan juntos en el mismo código....",
    "url": "https://es.wikipedia.org/wiki/Programaci%C3%B3n_en_pareja",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 61,
    "title": "Tabnine",
    "description": "Asistente de autocompletado basado en IA con opción de modelo local....",
    "url": "https://www.tabnine.com/",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 62,
    "title": "Codeium",
    "description": "Asistente de programación gratuito basado en IA para múltiples lenguajes....",
    "url": "https://www.codeium.com/",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 63,
    "title": "Cursor IDE",
    "description": "Entorno de desarrollo con IA integrada como núcleo del sistema....",
    "url": "https://cursor.sh/",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 64,
    "title": "Jet",
    "description": "Brains AI AssistantAsistente de IA integrado en IDEs de JetBrains....",
    "url": "https://www.jetbrains.com/ai/",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 65,
    "title": "Script",
    "description": "Programa pequeño que automatiza tareas específicas mediante instrucciones secuenciales....",
    "url": "https://es.wikipedia.org/wiki/Script",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 66,
    "title": "Macro (Excel Macro)",
    "description": "Conjunto de instrucciones automatizadas dentro de una aplicación como Excel para ejecutar tareas rep...",
    "url": "https://es.wikipedia.org/wiki/Macro",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 67,
    "title": "Commit",
    "description": "Registro de cambios guardado en un sistema de control de versiones....",
    "url": "https://es.wikipedia.org/wiki/Commit_(control_de_versiones)",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 68,
    "title": "Push",
    "description": "Acción de enviar commits desde un repositorio local a uno remoto....",
    "url": "https://es.wikipedia.org/wiki/Git",
    "page": "modulo_1/seguridad.html",
    "pageName": "Seguridad y Arquitectura",
    "icon": "🔒"
  },
  {
    "number": 69,
    "title": "Git",
    "description": "Hub ActionsSistema de automatización y CI/CD integrado en GitHub....",
    "url": "https://docs.github.com/en/actions",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 70,
    "title": "Pipeline CI/CD",
    "description": "Flujo automatizado que integra compilación, pruebas y despliegue continuo....",
    "url": "https://es.wikipedia.org/wiki/Integraci%C3%B3n_continua",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 71,
    "title": "Test Coverage (Cobertura de pruebas)",
    "description": "Métrica que indica qué porcentaje del código está cubierto por pruebas automatizadas....",
    "url": "https://en.wikipedia.org/wiki/Code_coverage",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 72,
    "title": "Casos Límite (Edge Cases)",
    "description": "Situaciones poco frecuentes o extremas que pueden provocar errores si no se contemplan....",
    "url": "https://en.wikipedia.org/wiki/Edge_case",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 73,
    "title": "Alucinaciones (Hallucinations in AI)",
    "description": "Respuestas generadas por modelos de IA que parecen correctas pero contienen información falsa o inve...",
    "url": "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 74,
    "title": "Reentrenamiento (Retraining)",
    "description": "Proceso de volver a entrenar un modelo de IA con nuevos datos para mejorar su rendimiento....",
    "url": "https://en.wikipedia.org/wiki/Transfer_learning",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 75,
    "title": "Generalización (Generalization)",
    "description": "Capacidad de un modelo para aplicar lo aprendido a datos nuevos no vistos previamente....",
    "url": "https://en.wikipedia.org/wiki/Generalization_(learning)",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 76,
    "title": "Regla “If-Then” (If A, Then B)",
    "description": "Estructura lógica utilizada en automatización tradicional basada en condiciones fijas....",
    "url": "https://en.wikipedia.org/wiki/If%E2%80%93then_rule",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 77,
    "title": "Lenguaje Natural (Natural Language Processing - NLP)",
    "description": "Capacidad de los sistemas para comprender y generar lenguaje humano....",
    "url": "https://es.wikipedia.org/wiki/Procesamiento_del_lenguaje_natural",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 78,
    "title": "Copyright",
    "description": "Derecho legal que protege obras originales frente a copias no autorizadas....",
    "url": "https://es.wikipedia.org/wiki/Derecho_de_autor",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 79,
    "title": "Directiva 2001/29/CE",
    "description": "Normativa europea sobre armonización de derechos de autor en la sociedad de la información....",
    "url": "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32001L0029",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 80,
    "title": "Convenio de BernaTratado internacional que protege obras literarias y artísticas.",
    "description": "Convenio de BernaTratado internacional que protege obras literarias y artísticas....",
    "url": "https://es.wikipedia.org/wiki/Convenio_de_Berna",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 81,
    "title": "Código Contaminado (Code Contamination)",
    "description": "Código generado por IA que reproduce fragmentos protegidos por licencia incompatible....",
    "url": "https://en.wikipedia.org/wiki/Software_license",
    "page": "modulo_1/servicios.html",
    "pageName": "Servicios Cloud y AWS",
    "icon": "☁️"
  },
  {
    "number": 82,
    "title": "GPL (General Public License)",
    "description": "Licencia de software libre que exige distribuir el código derivado bajo la misma licencia....",
    "url": "https://es.wikipedia.org/wiki/GNU_General_Public_License",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 83,
    "title": "AGPL (Affero General Public License)",
    "description": "Versión más restrictiva de la GPL que obliga a liberar el código incluso si se usa como servicio (Sa...",
    "url": "https://es.wikipedia.org/wiki/GNU_Affero_General_Public_License",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 84,
    "title": "MIT License",
    "description": "Licencia permisiva que permite reutilización con pocas restricciones....",
    "url": "https://es.wikipedia.org/wiki/Licencia_MIT",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 85,
    "title": "Apache License 2.0",
    "description": "Licencia permisiva que incluye protección frente a patentes....",
    "url": "https://es.wikipedia.org/wiki/Licencia_Apache",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 86,
    "title": "SaaS (Software as a Service)",
    "description": "Modelo de distribución de software basado en servicios en la nube....",
    "url": "https://es.wikipedia.org/wiki/Software_como_servicio",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 87,
    "title": "AI Act (Ley de IA de la Unión Europea)",
    "description": "Regulación europea que establece normas para el desarrollo y uso de sistemas de IA....",
    "url": "https://es.wikipedia.org/wiki/Reglamento_de_Inteligencia_Artificial_de_la_Uni%C3%B3n_Europea",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 88,
    "title": "Trazabilidad (Traceability)",
    "description": "Capacidad de rastrear el origen y modificaciones del código o datos utilizados....",
    "url": "https://en.wikipedia.org/wiki/Traceability",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 89,
    "title": "Licencia de",
    "description": "SoftwareContrato legal que define cómo puede usarse, modificarse y distribuirse un programa....",
    "url": "https://es.wikipedia.org/wiki/Licencia_de_software",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 90,
    "title": "Código Open Source",
    "description": "Software cuyo código fuente es accesible públicamente para su uso y modificación....",
    "url": "https://es.wikipedia.org/wiki/C%C3%B3digo_abierto",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 91,
    "title": "Atribución",
    "description": "Reconocimiento obligatorio del autor original en determinados tipos de licencia....",
    "url": "https://es.wikipedia.org/wiki/Atribuci%C3%B3n",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 92,
    "title": "Responsabilidad Legal (Legal Liability)",
    "description": "Obligación jurídica derivada del uso indebido de software o infracción de derechos....",
    "url": "https://es.wikipedia.org/wiki/Responsabilidad_jur%C3%ADdica",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 93,
    "title": "Datos Sensibles (Sensitive Data)",
    "description": "Información confidencial como contraseñas, claves API o datos personales protegidos por ley....",
    "url": "https://es.wikipedia.org/wiki/Datos_personales",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  },
  {
    "number": 94,
    "title": "Clave API (API Key)",
    "description": "Código utilizado para autenticar y autorizar el acceso a una API....",
    "url": "https://en.wikipedia.org/wiki/Application_programming_interface_key",
    "page": "modulo_1/licencias.html",
    "pageName": "Licencias y Regulación",
    "icon": "⚖️"
  }
];