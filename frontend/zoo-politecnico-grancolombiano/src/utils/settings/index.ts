interface SharedPreferenceParams {
  key: string;
  preference: string;
}

export class SharedPreference {
  public static setItem({ key, preference }: SharedPreferenceParams): void {
    localStorage.setItem(key, preference);
    window.dispatchEvent(new Event('newSharedPreference'));
  }

  public static getItem({
    key,
  }: Omit<SharedPreferenceParams, 'preference'>): string | null {
    return localStorage.getItem(key);
  }

  public static destroy(): void {
    localStorage.clear();
  }
}
