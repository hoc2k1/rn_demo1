import React from 'react';
import { UI_COMPONENTS } from '../constants/uiComponents';

/**
 * UI Registry quản lý việc ánh xạ giữa các Component mặc định và Component đã được Customize.
 * Điều này cho phép chúng ta ghi đè bất kỳ UI nào từ thư mục `customize` mà không cần sửa code ở Core.
 */

type ComponentMap = { [key: string]: React.ComponentType<any> };

class UIRegistry {
  private components: ComponentMap = {};
  private overrides: ComponentMap = {};

  /**
   * Đăng ký một component mặc định
   */
  register(name: string, component: React.ComponentType<any>) {
    this.components[name] = component;
  }

  /**
   * Ghi đè một component (thường gọi từ thư mục customize)
   */
  override(name: string, component: React.ComponentType<any>) {
    this.overrides[name] = component;
  }

  /**
   * Lấy component để render. Ưu tiên bản override.
   */
  get<T>(name: string): React.ComponentType<T> {
    const component = this.overrides[name] || this.components[name];
    if (!component) {
      console.warn(`UIComponent "${name}" is not registered. Rendering empty View.`);
      return (() => null) as any;
    }
    return component as React.ComponentType<T>;
  }
}

export const uiRegistry = new UIRegistry();

/**
 * HOC hoặc Component Wrapper để dễ dàng sử dụng Registry trong JSX
 */
export const UIProvider: React.FC<{ name: string; [key: string]: any }> = ({ name, ...props }) => {
  const Component = uiRegistry.get(name);
  return <Component {...props} />;
};
