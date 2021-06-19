import { OnDestroy } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export abstract class BaseComponent implements OnDestroy {

    public readonly destroyed$: Observable<unknown>;
    private readonly destroyedSubject = new Subject();

    constructor() {
        this.destroyed$ = this.destroyedSubject.asObservable();
    }

    public ngOnDestroy() {
        this.destroyedSubject.next();
        this.destroyedSubject.complete();
    }

    protected takeUntilDestroyed<T>() {
        return takeUntil<T>(this.destroyed$);
    }
}