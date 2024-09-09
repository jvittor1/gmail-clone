import { DrawerContent } from "@/components/drawer-content";
import { CustomOptions } from "@/types/navigation";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Todas as caixas de entrada.",
            iconName: "all-inbox",
            isDivider: true,
            notifications: 5,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="main"
        options={
          {
            title: "Principal",
            iconName: "inbox",
            isDivider: false,
            notifications: 2,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="promotions"
        options={
          {
            title: "Promoções",
            iconName: "local-offer",
            isDivider: false,
            notifications: 2,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="social"
        options={
          {
            title: "Social",
            iconName: "people",
            isDivider: false,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="updates"
        options={
          {
            title: "Atualizações",
            iconName: "update",
            isDivider: false,
            sectionTitle: "Todos os marcadores",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="stars"
        options={
          {
            title: "Com estrela",
            iconName: "star-border",
            isDivider: false,
            notifications: 1,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconName: "schedule",
            isDivider: false,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important",
            isDivider: false,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviados",
            iconName: "send",
            isDivider: false,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
            isDivider: false,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "exit-to-app",
            isDivider: false,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunhos",
            iconName: "drafts",
            isDivider: false,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
            isDivider: false,
            notifications: 6,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconName: "report",
            isDivider: false,
            notifications: 1,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete",
            isDivider: false,
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
            isDivider: false,
            sectionTitle: "Configurações",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="help-feedback"
        options={
          {
            title: "Ajuda e feedback",
            iconName: "help",
            isDivider: false,
          } as CustomOptions
        }
      />
    </Drawer>
  );
}
