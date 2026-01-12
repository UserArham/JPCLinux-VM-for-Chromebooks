let emulator = null;

function startDOS() {
    if (emulator) emulator.stop();

    emulator = new V86Starter({
        wasm_path: "v86/v86.wasm",

        screen_container: document.getElementById("screen"),

        bios: { url: "images/bios/seabios.bin" },
        vga_bios: { url: "images/bios/vgabios.bin" },

        hda: { url: "images/freedos.img" },

        memory_size: 64 * 1024 * 1024,
        vga_memory_size: 8 * 1024 * 1024,

        autostart: true
    });
}
