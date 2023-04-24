import random

nombres = ["Juan", "Pedro", "Maria", "Luisa", "Ana", "Miguel", "Sofia", "Julia"]
apellidos = ["Gomez", "Perez", "Rodriguez", "Lopez", "Fernandez", "Gonzalez"]
ciudades = ["Bogotá", "Medellin", "Cali", "Barranquilla", "Cartagena", "Pereira", "Manizales"]

with open("datos_prueba3.txt", "w") as f:
    for i in range(100):
        nombre = random.choice(nombres)
        apellido = random.choice(apellidos)
        telefono = "".join(str(random.randint(0, 9)) for _ in range(8))
        ciudad = random.choice(ciudades)
        f.write(f"{nombre}@{apellido}@{telefono}@{ciudad}\n")

