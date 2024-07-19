{pkgs}: {
  deps = [
    pkgs.rubyPackages.cocoapods
    pkgs.temurin-bin-21
    pkgs.unixtools.ping
    pkgs.wget
    pkgs.imagemagick_light
    pkgs.nano
   ];
}
