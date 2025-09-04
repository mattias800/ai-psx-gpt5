#!/bin/bash

# Download a BIOS for testing (SCPH-5502 European BIOS)
# Note: This is for testing/development purposes only

BIOS_URL="https://archive.org/download/playstation-bios-scph-5502-v3.0-e-1997-01-06/PlayStation%20BIOS%20SCPH-5502%20v3.0%20E%20%281997-01-06%29.bin"
BIOS_FILE="scph5502.bin"

if [ -f "$BIOS_FILE" ]; then
    echo "BIOS file already exists: $BIOS_FILE"
    exit 0
fi

echo "Downloading test BIOS..."
curl -L -o "$BIOS_FILE" "$BIOS_URL"

if [ $? -eq 0 ]; then
    echo "BIOS downloaded successfully: $BIOS_FILE"
    ls -lah "$BIOS_FILE"
else
    echo "Failed to download BIOS"
    exit 1
fi
