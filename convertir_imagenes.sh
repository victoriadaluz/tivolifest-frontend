# Ruta base ajustada para Windows/Git Bash
CARPETA_IMAGENES="src/assets"

# Busca todas las carpetas y convierte imágenes
find "$CARPETA_IMAGENES" -type d | while read -r carpeta; do
    echo "Procesando carpeta: $carpeta"
    cd "$carpeta" || exit
    
    # Convierte imágenes a WebP (compatible con espacios en nombres)
    for img in *.jpg *.JPG *.png *.PNG; do
        if [ -f "$img" ]; then
            echo "Convirtiendo $img a WebP..."
            cwebp -q 85 "$img" -o "${img%.*}.webp"
        fi
    done
    
    cd - > /dev/null || exit
done

echo "✅ ¡Conversión completada!"