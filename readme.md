## Elección del Motor de Plantillas:

<hr>

### Criterios :

<br>

Respecto de **Handlebars** -

-   Ventajas:

                    * El motor es de fácil utilización en cuanto a su sintaxis propia.

-   Desventajas:

                        * En relación a la complejidad de su configuración, Handlebars es el peor de los 3 motores, requiriendo el paso extra de configuración del motor.

                        * Su funcionalidad es bastante limitada en cuanto a la implementación de JavaScript dentro de las plantillas, requiriendo que la lógica sea procesada en el servidor.

    <hr>

Respecto de **PUG** -

-   Ventajas:

                    * La sintaxis de PUG si hace que el código parezca más sencillo y limpio.
                    * Su configuración en el proyecto es sencilla y tiene integración con express.

-   Desventajas:

                    * Es el que más modifica la sintaxis de los lenguajes HTML y JavaScript, creando dentro de éste funciones propias para recorrer arrays y hacer validaciones que no siguen el estándar de JavaScript, sino que resultan más similares a las iteraciones en Python. Genera mayor costo en la curva de aprendizaje del lenguaje.

                    * La implementación de código JavaScript multilinea a través del operador "-" sin generar mayor distinción hace que en estructuras complejas el código no resulte tan entendible.

                    * El sistema de anidación por identación es una mala resolución, dado que en primer lugar existen numerosos formateadores de código que al guardar modifican completamente la estructura, corriendo el riesgo de dejar nodos fuera de sus correspondientes padres.
                    Asimismo, cualquier mínimo espacio que exista y rompa la identación arroja un error. Esto es problemático, dado que el espacio o una tabulación son invisibles y difíciles de detectar, no considero una buena decisión la sintaxis elegida.

<hr>

Respecto de **EJS** --> [*Motor Elegido*] |

-   Ventajas:

                    * Posibilita la completa funcionalidad de JavaScript, permitiendo la utilización de cualquier tipo de funciones, Objetos y prototipos propios del Lenguaje.

                    * Mantiene completa fidelidad a los lenguajes de programación HTML y JavaScript en cuanto a su esencia, generando una pequeña intrusión a los fines de que el motor detecte el código que debe modificar. Tal es así, que en el mismo repositorio de GitHub no es detectado por el algoritmo, cuando PUG y Handlebars se delatan por su sintaxis.

-   Desventajas:

                    * Es engorrosa la sintaxis elegida "<% %>"  y es funtamental prestar mucha atención de colocar dicha simbolización desde un comienzo. De lo contrario, puede uno estar horas debuggeando por errores de sintaxis. Considero que debiera tener mayor soporte del IDE para resaltar con IntelliSense los errores en cuanto a ésta.

<br>
<hr>
<br>

**CONCLUSIÓN** -

**El Motor de Plantillas por el cual me inclino es EJS**.

Si bien aparenta complejidad en su sintaxis, es el motor más potente en cuanto a implementación de lógica JavaScript dentro de sus plantillas; así como también permite la redacción de un código limpio y entendible para cualquier persona que no se encuentra versada en la sintaxis particular del mismo. PUG peca de demasiada modificación en la sintaxis, lo que genera mayor tiempo de estudio invertido en sacarle jugo, y tampoco resulta tan potente en sus implementaciones. Y Handlebars pierde por complejidad mayor en su instalación y por no lograr nada que sus competidores no realicen.
