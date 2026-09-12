#!/usr/bin/env python3
"""
Hostinger FTP Deployment Script for Gelateria Al Bacio (albaciogelateria.es)
Usage:
    python3 deploy-ftp.py [host] [user] [password]
Or run interactively:
    python3 deploy-ftp.py
"""

import os
import sys
import ftplib
import getpass

DIST_DIR = os.path.join(os.path.dirname(__file__), 'dist')

def upload_directory(ftp, local_dir, remote_dir):
    try:
        ftp.cwd(remote_dir)
    except ftplib.error_perm:
        ftp.mkd(remote_dir)
        ftp.cwd(remote_dir)

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        if os.path.isdir(local_path):
            print(f"📁 Creant directori remot: {item}/")
            upload_directory(ftp, local_path, item)
            ftp.cwd("..")
        else:
            print(f"⬆️  Pujant: {item}")
            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR {item}", f)

def main():
    print("🍦 Desplegament de Gelateria Al Bacio a Hostinger")
    print("=" * 50)
    
    if len(sys.argv) >= 4:
        host = sys.argv[1]
        user = sys.argv[2]
        password = sys.argv[3]
    else:
        host = input("Host FTP de Hostinger (ex: ftp.albaciogelateria.es o IP del servidor): ").strip()
        user = input("Usuari FTP de Hostinger: ").strip()
        password = getpass.getpass("Contrasenya FTP: ").strip()

    if not os.path.exists(DIST_DIR):
        print("❌ El directori 'dist' no existeix. Executa primer 'npm run build'.")
        sys.exit(1)

    print(f"\n📡 Connectant a {host} com {user}...")
    try:
        ftp = ftplib.FTP(host)
        ftp.login(user, password)
        print("✅ Connexió establerta amb èxit.")
        
        # Determine public_html directory
        current_list = ftp.nlst()
        if "public_html" in current_list:
            target_dir = "public_html"
        else:
            target_dir = "."
            
        print(f"🚀 Pujant fitxers de producció a '{target_dir}'...")
        upload_directory(ftp, DIST_DIR, target_dir)
        
        ftp.quit()
        print("\n🎉 Web publicada amb èxit a http://albaciogelateria.es/!")
    except Exception as e:
        print(f"\n❌ Error durant la transferència FTP: {e}")
        print("💡 També pots pujar manualment el fitxer 'albaciogelateria-hostinger.zip' des del Gestor d'Arxius de Hostinger.")

if __name__ == "__main__":
    main()
