{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    fortune
    cowsay
    vim
  ];

  shellHook = ''
    fortune | cowsay
  '';
}
